import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("render whole component", () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
