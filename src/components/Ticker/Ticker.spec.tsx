import { render } from "@/utils/testUtils";
import { Ticker } from "./";

describe("<Ticker />", () => {
  it("Renders without crashing", () => {
    render(<Ticker />);
  });
});
