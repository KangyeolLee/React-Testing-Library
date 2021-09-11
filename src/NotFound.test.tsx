import { render } from "@testing-library/react";
import NotFound from "./NotFound";

describe("<NotFound />", () => {
  it("render Header", () => {
    const { getByText } = render(<NotFound />);
    const header = getByText("Page Not Found");
    expect(header).toBeInTheDocument();
  });

  it("render paragraph", () => {
    const { getByText } = render(<NotFound />);
    const paragraph = getByText(/^해당 페이지/);
    expect(paragraph).toHaveTextContent("해당 페이지를 찾을 수가 없습니다.");
  });
});
