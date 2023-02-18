import { Team, TeamProps } from ".";
import { screen, render } from "@/utils/testUtils";

describe("<Team />", () => {
  it("Renders without crashing", () => {
    const props: TeamProps = {
      members: [
        {
          name: "John Doe",
          role: "Developer",
          memojiSrc: "/assets/images/memoji-1.png",
        },
        {
          name: "Jane Doe",
          role: "Manager",
          memojiSrc: "/assets/images/memoji-2.png",
        },
      ],
    };
    render(<Team {...props} />);

    props.members.map(({ name, role }) => {
      expect(screen.getByRole("img", { name: `Memoji ${name}` })).toBeInTheDocument();
      expect(screen.getByText(name)).toBeVisible();
      expect(screen.getByText(role)).toBeVisible();
    });
  });
});
