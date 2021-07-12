import { render } from "@/utils/testUtils";
import { Memoji } from ".";

describe("<Memoji />", () => {
	it("renders without crashing", () => {
		render(<Memoji />);
	});
});
