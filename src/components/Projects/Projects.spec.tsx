import { render, screen } from "@/utils/testUtils";
import { sliceItems } from "@/components/Projects/utils";
import { useProjects } from "@/hooks/useProjects";
import { ProjectsListItem } from "./List/Item";
import { ProjectsListItemModal } from "./List/Item/Modal";
import { ProjectLinks } from "./List/Item/Links";
import { ProjectsList } from "./List";

jest.mock("@/hooks/useProjects");

const mockedUseProject = useProjects as jest.Mock<any>;

const data = {
	title: "Test Project",
	description: "Test Description",
	liveUrl: "https://nextglabs.com",
	githubUrl: "https://github.com/nextglabs",
	featuredImage: {
		url: "https://nextglabs.com/image.png",
		alt: "fake-nextglabs-image",
	},
	categories: ["FullStack", "Design"],
	languages: ["TypeScript", "GraphQL"],
	databases: ["MongoDB", "Postgres"],
	frameworks: ["NextJS", "React"],
	libraries: ["SWR", "Testing Library"],
};

describe("<ProjectsListItem />", () => {
	it("Renders project details", () => {
		render(<ProjectsListItem data={data} />);

		// Title & Description
		screen.getByText(data.title);
		screen.getByText(data.description);

		// Image
		const displayedImage = document.querySelector("img") as HTMLImageElement;
		expect(displayedImage.src).toContain(data.featuredImage.url);
		expect(displayedImage.alt).toContain(data.featuredImage.alt);

		// Links
		expect(screen.getByText(/github/i));
		expect(screen.getByText(/live/i));

		// Tech Stack Tags & Button
		const { displayedItems, remainingItems } = sliceItems(
			[...data.frameworks, ...data.libraries, ...data.languages],
			4,
		);
		displayedItems.forEach(item => {
			screen.getByText(item);
		});
		screen.getByText(`${remainingItems}+`);
		screen.getByRole("button", { name: /Stack/i });
	});

	it("Hides Stack button when noting to show", () => {
		render(
			<ProjectsListItem
				data={{ title: data.title, description: data.description, featuredImage: data.featuredImage }}
			/>,
		);
		expect(screen.queryByRole("button", { name: /Stack/i })).not.toBeInTheDocument();
	});

	it("Renders without crashing when server data is incorrect", () => {
		// simulate no data passed to component
		// @ts-ignore
		render(<ProjectsListItem />);
	});
});

describe("<ProjectListItemLinks />", () => {
	it("Links to correct urls", () => {
		render(<ProjectLinks urls={{ liveUrl: data.liveUrl, githubUrl: data.githubUrl }} />);
		expect(screen.getByText(/github/i)).toHaveAttribute("href", data.githubUrl);
		expect(screen.getByText(/live/i)).toHaveAttribute("href", data.liveUrl);
	});

	it("Only shows given urls", () => {
		const { rerender } = render(<ProjectLinks urls={{ liveUrl: data.liveUrl }} />);
		expect(screen.queryByText(/github/i)).not.toBeInTheDocument();

		rerender(<ProjectLinks urls={{ githubUrl: data.githubUrl }} />);
		expect(screen.queryByText(/live/i)).not.toBeInTheDocument();
	});

	it("Displays long labels (when `shortLabels={false}`", () => {
		render(<ProjectLinks urls={{ liveUrl: data.liveUrl, githubUrl: data.githubUrl }} shortLabels={false} />);
		screen.getByText(/github repository/i);
		screen.getByText(/live website/i);
	});
});

describe("<ProjectListItemModal />", () => {
	it("Display Title & Links", () => {
		render(<ProjectsListItemModal isOpen {...data} />);
		screen.getByText(data.title);
	});

	it("Displays no stacks message", () => {
		render(<ProjectsListItemModal isOpen />);
		screen.getByText(/No Stack has been defined for this project./i);
	});

	it("Displays only the provided stack items", () => {
		render(<ProjectsListItemModal isOpen databases={data.databases} />);
		expect(screen.queryByText(/databases/i)).toBeInTheDocument();
		expect(screen.queryByText(/frameworks/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/libraries/i)).not.toBeInTheDocument();
		expect(screen.queryByText(/languages/i)).not.toBeInTheDocument();
	});

	it("Displays singular label when array contains only 1 item", () => {
		const framework = data.frameworks[0];
		const library = data.libraries[0];
		const database = data.databases[0];
		const language = data.languages[0];
		render(
			<ProjectsListItemModal
				isOpen
				frameworks={[framework]}
				libraries={[library]}
				databases={[database]}
				languages={[language]}
			/>,
		);
		screen.getByText(/framework/i);
		screen.getByText(/library/i);
		screen.getByText(/database/i);
		screen.getByText(/language/i);

		screen.getByText(framework);
		screen.getByText(library);
		screen.getByText(database);
		screen.getByText(language);
	});

	it("Displays stack items", () => {
		render(
			<ProjectsListItemModal
				isOpen
				frameworks={data.frameworks}
				libraries={data.libraries}
				databases={data.databases}
				languages={data.languages}
			/>,
		);

		const stack = [...data.languages, ...data.frameworks, ...data.databases, ...data.libraries];
		stack.forEach(item => {
			screen.getByText(item);
		});
	});
});

describe("<ProductsList", () => {
	// !Workaround for TypeError: env.window.matchMedia is not a function
	// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
	Object.defineProperty(window, "matchMedia", {
		writable: true,
		value: jest.fn().mockImplementation(query => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: jest.fn(), // Deprecated
			removeListener: jest.fn(), // Deprecated
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
			dispatchEvent: jest.fn(),
		})),
	});

	it("Displays skeleton when fetching projects", () => {
		mockedUseProject.mockReturnValue({ isLoading: true });

		render(<ProjectsList />);
		expect(screen.queryAllByTestId("project-skeleton").length).toBe(3);
	});

	it("Displays error when fetch projects fails", () => {
		mockedUseProject.mockReturnValue({ isError: true });

		render(<ProjectsList />);
		screen.getByText(/Sorry, something terrible happened and the projects could not be loaded... 😱/i);
	});

	it("Displays projects when fetch projects succeeds", async () => {
		mockedUseProject.mockReturnValue({ data: { projects: [data, data] } });
		render(<ProjectsList />);

		expect(screen.queryAllByText(data.title).length).toBe(2);
		expect(screen.queryAllByText(data.description).length).toBe(2);
	});
});
