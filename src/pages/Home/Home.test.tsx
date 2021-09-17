import { render } from "@testing-library/react";
import Home from "./Home";

describe("<Home />", () => {
  it("render whole component", () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });
});
