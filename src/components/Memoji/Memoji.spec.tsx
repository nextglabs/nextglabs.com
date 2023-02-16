import { render, screen } from "@/utils/testUtils";
import { Memoji } from ".";

describe("<Memoji />", () => {
  it("renders without crashing", () => {
    render(<Memoji alt="memoji" src="/assets/images/memoji-surprised.png" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "/_next/image?url=%2Fassets%2Fimages%2Fmemoji-surprised.png&w=256&q=75");
  });
});
