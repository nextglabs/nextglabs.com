import { SERVICES } from "@/config/services";
import { render, screen } from "@/utils/testUtils";
import { Services } from ".";

describe("<Services />", () => {
  it("renders services elements", () => {
    render(<Services />);
    expect(screen.getByText("services.title")).toBeVisible();
    expect(screen.getByText("services.description")).toBeVisible();

    SERVICES.forEach((service) => {
      expect(screen.getByText(`services.items.${service.key}.title`)).toBeInTheDocument();
      expect(screen.getByText(`services.items.${service.key}.description`)).toBeInTheDocument();
    });
  });
});
