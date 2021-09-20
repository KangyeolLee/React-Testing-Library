import Home from "./Home";
import box from "@/assets/box.png";
import car from "@/assets/car.png";
import error from "@/assets/404error.png";
import { lightMode } from "@/styles/theme";
import renderComponent from "@/utils/test/renderComponent";

describe("<Home />", () => {
  it("render whole component", () => {
    const { container } = renderComponent({
      theme: lightMode,
      JSXElement: <Home />,
    });
    expect(container).toBeInTheDocument();
  });

  it("render form card", () => {
    const { getByText, getByAltText } = renderComponent({
      theme: lightMode,
      JSXElement: <Home />,
    });

    const title = getByText(/폼 제출/);
    expect(title).toBeInTheDocument();

    const image = getByAltText(/폼 제출 이미지/);
    expect(image).toHaveAttribute("src", box);
  });

  it("render data card", () => {
    const { getByText, getByAltText } = renderComponent({
      theme: lightMode,
      JSXElement: <Home />,
    });

    const title = getByText(/데이터 불러오기/);
    expect(title).toBeInTheDocument();

    const image = getByAltText(/데이터 불러오기 이미지/);
    expect(image).toHaveAttribute("src", car);
  });

  it("render error card", () => {
    const { getByText, getByAltText } = renderComponent({
      theme: lightMode,
      JSXElement: <Home />,
    });

    const title = getByText(/잘못된 페이지 요청/);
    expect(title).toBeInTheDocument();

    const image = getByAltText(/잘못된 페이지 요청 이미지/);
    expect(image).toHaveAttribute("src", error);
  });
});
