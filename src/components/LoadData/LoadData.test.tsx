import LoadData from ".";
import gossip from "@/assets/gossip.png";
import { lightMode } from "@/styles/theme";
import renderComponent from "@/utils/test/renderComponent";

describe("<LoadData />", () => {
  it("render whole components", () => {
    const { getByText, getByAltText } = renderComponent({
      theme: lightMode,
      JSXElement: <LoadData />,
    });

    const image = getByAltText(/데이터 불러오기 관련 이미지/);
    expect(image).toHaveAttribute("src", gossip);

    const title = getByText(/SUSPENSE/);
    expect(title).toBeInTheDocument();
  });
});
