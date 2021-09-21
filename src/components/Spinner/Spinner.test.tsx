import Spinner from ".";
import { render } from "@testing-library/react";

describe("<Spinner />", () => {
  it("render Spinner Comoponents", () => {
    const { getByTestId } = render(<Spinner />);

    const spinner = getByTestId("test-spinner");
    expect(spinner).toBeInTheDocument();
  });
});
