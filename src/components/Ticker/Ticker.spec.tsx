import { TICKER_KEYS } from "@/config/services";
import { screen, render } from "@/utils/testUtils";
import { Ticker } from "./";

describe("<Ticker />", () => {
  it("Renders ticker keywords & separators", () => {
    render(<Ticker />);
    TICKER_KEYS.forEach((key) => {
      expect(screen.getAllByText(`services.items.${key}.title`)).toHaveLength(4);
    });
    expect(screen.getAllByText("•")).toHaveLength(TICKER_KEYS.length * 4);
  });
});
