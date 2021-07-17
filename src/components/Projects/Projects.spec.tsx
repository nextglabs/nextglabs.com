import { axe } from "jest-axe";
import { render } from "@/utils/testUtils";
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
		const { getByText, getByRole } = render(<ProjectsListItem data={data} />);

		// Title & Description
		getByText(data.title);
		getByText(data.description);

		// Image
		const displayedImage = document.querySelector("img") as HTMLImageElement;
		expect(displayedImage.src).toContain(data.featuredImage.url);
		expect(displayedImage.alt).toContain(data.featuredImage.alt);

		// Links
		expect(getByText(/github/i));
		expect(getByText(/live/i));

		// Tech Stack Tags & Button
		const { displayedItems, remainingItems } = sliceItems(
			[...data.frameworks, ...data.libraries, ...data.languages],
			4,
		);
		displayedItems.forEach(item => {
			getByText(item);
		});
		getByText(`${remainingItems}+`);
		getByRole("button", { name: /Stack/i });
	});

	it("Hides Stack button when noting to show", () => {
		const { queryByRole } = render(
			<ProjectsListItem
				data={{ title: data.title, description: data.description, featuredImage: data.featuredImage }}
			/>,
		);
		expect(queryByRole("button", { name: /Stack/i })).toBeNull();
	});

	it("Renders without crashing when server data is incorrect", () => {
		// simulate no data passed to component
		// @ts-ignore
		render(<ProjectsListItem />);
	});
});

describe("<ProjectListItemLinks />", () => {
	it("Links to correct urls", () => {
		const { getByText } = render(<ProjectLinks urls={{ liveUrl: data.liveUrl, githubUrl: data.githubUrl }} />);
		expect(getByText(/github/i).closest("a")).toHaveAttribute("href", data.githubUrl);
		expect(getByText(/live/i).closest("a")).toHaveAttribute("href", data.liveUrl);
	});

	it("Only shows given urls", () => {
		const { rerender, queryByText } = render(<ProjectLinks urls={{ liveUrl: data.liveUrl }} />);
		expect(queryByText(/github/i)).toBeNull();

		rerender(<ProjectLinks urls={{ githubUrl: data.githubUrl }} />);
		expect(queryByText(/live/i)).toBeNull();
	});

	it("Displays long labels (when `shortLabels={false}`", () => {
		const { getByText } = render(
			<ProjectLinks urls={{ liveUrl: data.liveUrl, githubUrl: data.githubUrl }} shortLabels={false} />,
		);
		getByText(/github repository/i);
		getByText(/live website/i);
	});
});

describe("<ProjectListItemModal />", () => {
	it("Display Title & Links", () => {
		const { getByText } = render(<ProjectsListItemModal isOpen {...data} />);
		getByText(data.title);
	});

	it("Displays no stacks message", () => {
		const { getByText } = render(<ProjectsListItemModal isOpen />);
		getByText(/No Stack has been defined for this project./i);
	});

	it("Displays only the provided stack items", () => {
		const { queryByText } = render(<ProjectsListItemModal isOpen databases={data.databases} />);
		expect(queryByText(/databases/i)).not.toBeNull();
		expect(queryByText(/frameworks/i)).toBeNull();
		expect(queryByText(/libraries/i)).toBeNull();
		expect(queryByText(/languages/i)).toBeNull();
	});

	it("Displays singular label when array contains only 1 item", () => {
		const framework = data.frameworks[0];
		const library = data.libraries[0];
		const database = data.databases[0];
		const language = data.languages[0];
		const { getByText } = render(
			<ProjectsListItemModal
				isOpen
				frameworks={[framework]}
				libraries={[library]}
				databases={[database]}
				languages={[language]}
			/>,
		);
		getByText(/framework/i);
		getByText(/library/i);
		getByText(/database/i);
		getByText(/language/i);

		getByText(framework);
		getByText(library);
		getByText(database);
		getByText(language);
	});

	it("Displays stack items", () => {
		const { getByText } = render(
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
			getByText(item);
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
		mockedUseProject.mockImplementation(() => ({ isLoading: true }));

		const { queryAllByTestId } = render(<ProjectsList />);
		expect(queryAllByTestId("project-skeleton").length).toBe(3);
	});

	it("Displays error when fetch projects fails", () => {
		mockedUseProject.mockImplementation(() => ({ isError: true }));

		const { getByText } = render(<ProjectsList />);
		getByText(/Sorry, something terrible happened and the projects could not be loaded... 😱/i);
	});

	it("Displays projects when fetch projects succeeds", async () => {
		mockedUseProject.mockImplementation(() => ({ data: { projects: [data, data] } }));
		const { container, queryAllByText } = render(<ProjectsList />);

		expect(queryAllByText(data.title).length).toBe(2);
		expect(queryAllByText(data.description).length).toBe(2);

		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
