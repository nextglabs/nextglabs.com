import { render, screen } from "@/utils/testUtils";
import { sliceItems } from "@/components/Projects/utils";
import { ProjectsListItem } from "./List/Item";
import { ProjectsListItemModal } from "./List/Item/Modal";
import { ProjectLinks } from "./List/Item/Links";
import { ProjectsList } from "./List";
import { SOCIAL } from "@/config/social";
import { Asset, Project } from "@/graphql/schema";

const data = {
  title: "Test Project",
  description: "Test Description",
  liveUrl: "https://nextglabs.com",
  githubUrl: "https://github.com/nextglabs",
  featuredImage: {
    url: "https://nextglabs.com/image.png",
    alt: "fake-nextglabs-image",
  } as Asset,
  categories: ["FullStack", "Design"],
  languages: ["TypeScript", "GraphQL"],
  databases: ["MongoDB", "Postgres"],
  frameworks: ["NextJS", "React"],
  libraries: ["SWR", "Testing Library"],
} as Project;

describe("<ProjectsListItem />", () => {
  it("Renders project details", () => {
    render(<ProjectsListItem data={data} />);

    // Title & Description
    screen.getByText(data.title);
    screen.getByText(data.description);

    // Image
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.alt).toContain(data.featuredImage.alt);

    // Links
    expect(screen.getByText(/github/i));
    expect(screen.getByText(/live/i));

    // Tech Stack Tags & Button
    const { displayedItems, remainingItems } = sliceItems([...data.frameworks, ...data.libraries, ...data.languages], 4);
    displayedItems.forEach((item) => {
      screen.getByText(item);
    });
    screen.getByText(`${remainingItems}+`);
    screen.getByRole("button", { name: /Stack/i });
  });

  it("Hides Stack button when noting to show", () => {
    render(<ProjectsListItem data={{ title: data.title, description: data.description, featuredImage: data.featuredImage } as Project} />);
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
    render(<ProjectLinks title="Test" urls={{ liveUrl: data.liveUrl, githubUrl: data.githubUrl }} />);
    expect(screen.getByText(/github/i)).toHaveAttribute("href", data.githubUrl);
    expect(screen.getByText(/live/i)).toHaveAttribute("href", data.liveUrl);
  });

  it("Only shows given urls", () => {
    const { rerender } = render(<ProjectLinks title="Test" urls={{ liveUrl: data.liveUrl }} />);
    expect(screen.queryByText(/github/i)).not.toBeInTheDocument();

    rerender(<ProjectLinks title="Test" urls={{ githubUrl: data.githubUrl }} />);
    expect(screen.queryByText("projects.viewLive.short")).not.toBeInTheDocument();
  });

  it("Displays long labels (when `shortLabels={false}`", () => {
    render(<ProjectLinks title="Test" urls={{ liveUrl: data.liveUrl, githubUrl: data.githubUrl }} shortLabels={false} />);
    screen.getByText("projects.viewGithub.long");
    screen.getByText("projects.viewLive.long");
  });
});

describe("<ProjectListItemModal />", () => {
  it("Display Title & Links", () => {
    render(<ProjectsListItemModal isOpen {...data} />);
    screen.getByText(data.title);
  });

  it("Displays no stacks message", () => {
    render(<ProjectsListItemModal isOpen />);
    screen.getByText("projects.modal.noStack");
  });

  it("Displays only the provided stack items", () => {
    render(<ProjectsListItemModal isOpen databases={data.databases} />);
    expect(screen.queryByText("projects.modal.languages:")).not.toBeInTheDocument();
    expect(screen.queryByText("projects.modal.frameworks:")).not.toBeInTheDocument();
    expect(screen.queryByText("projects.modal.libraries:")).not.toBeInTheDocument();
    expect(screen.getByText("projects.modal.databases:")).toBeInTheDocument();
  });

  it("Displays plural label when array contains 0 or more than 1 items", () => {
    const framework = data.frameworks[0];
    const library = data.libraries[0];
    const database = data.databases[0];
    const language = data.languages[0];
    render(<ProjectsListItemModal isOpen frameworks={[framework]} libraries={[library]} databases={[database]} languages={[language]} />);
    expect(screen.getByText("projects.modal.languages:")).toBeInTheDocument();
    expect(screen.getByText("projects.modal.frameworks:")).toBeInTheDocument();
    expect(screen.getByText("projects.modal.libraries:")).toBeInTheDocument();
    expect(screen.getByText("projects.modal.databases:")).toBeInTheDocument();

    expect(screen.getByText(language)).toBeInTheDocument();
    expect(screen.getByText(framework)).toBeInTheDocument();
    expect(screen.getByText(library)).toBeInTheDocument();
    expect(screen.getByText(database)).toBeInTheDocument();
  });

  it("Displays stack items", () => {
    render(
      <ProjectsListItemModal isOpen frameworks={data.frameworks} libraries={data.libraries} databases={data.databases} languages={data.languages} />,
    );

    const stack = [...data.languages, ...data.frameworks, ...data.databases, ...data.libraries];
    stack.forEach((item) => {
      screen.getByText(item);
    });
  });
});

describe("<ProductsList", () => {
  it("Displays error when projects are not defined", () => {
    render(<ProjectsList projects={undefined} />);
    screen.getByText("projects.notFound");
  });

  it("Displays projects when fetch projects succeeds", async () => {
    render(<ProjectsList projects={[data, data]} />);

    expect(screen.queryAllByText(data.title).length).toBe(2);
    expect(screen.queryAllByText(data.description).length).toBe(2);
  });

  it("Displays coming next project (empty)", () => {
    render(<ProjectsList projects={[data, data]} />);

    expect(screen.getByRole("img", { name: /Empty Project Image/i }));
    expect(screen.getByText("projects.placeholder.title")).toBeInTheDocument();
    expect(screen.getByText("projects.placeholder.tag")).toBeInTheDocument();
    expect(screen.getByText("projects.placeholder.description")).toBeInTheDocument();
    expect(screen.getByText("projects.placeholder.viewServices").closest("a")).toHaveAttribute("href", "/#services");
    expect(screen.getByText("projects.placeholder.cta").closest("a")).toHaveAttribute("href", `mailto:${SOCIAL.EMAIL}`);
  });
});
