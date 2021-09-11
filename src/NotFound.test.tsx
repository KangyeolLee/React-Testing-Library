import { render } from "@testing-library/react";
import NotFound from "./NotFound";

describe("<NotFound />", () => {
  it("render Header", () => {
    const { getByText } = render(<NotFound />);
    const header = getByText("Page Not Found");
    expect(header).toBeInTheDocument();
  });
});
