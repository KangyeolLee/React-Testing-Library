import Header from ".";
import { lightMode } from "@/styles/theme";
import renderComponent from "@/utils/test/renderComponent";

describe("<Header />", () => {
  it("header: render header contents", () => {
    const { getByText } = renderComponent({
      theme: lightMode,
      JSXElement: <Header title="폼 제출 테스트" />,
    });

    const header = getByText(/폼 제출 테스트/);
    const button = getByText(/홈으로/);

    expect(header).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
