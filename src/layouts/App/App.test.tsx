import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("render whole component", () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it("toggle button for changing global theme", () => {
    const { getByText } = render(<App />);

    const button = getByText("테마변경");

    expect(button).toBeEnabled();

    fireEvent.click(button);

    expect(button).toBeEnabled();
  });
});
