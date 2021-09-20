import SubmitForm from ".";
import { createMemoryHistory } from "history";
import { fireEvent } from "@testing-library/react";
import form from "@/assets/form.png";
import { lightMode } from "@/styles/theme";
import renderComponent from "@/utils/test/renderComponent";

describe("<SubmitForm />", () => {
  it("header: render header contents", () => {
    const { getByText } = renderComponent({
      theme: lightMode,
      JSXElement: SubmitForm,
    });

    const header = getByText(/폼 제출 테스트/);
    const button = getByText(/홈으로/);

    expect(header).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("render whole contents", () => {
    const { getByAltText, getByTestId } = renderComponent({
      theme: lightMode,
      JSXElement: SubmitForm,
    });

    const image = getByAltText(/폼 관련 이미지/);
    expect(image).toHaveAttribute("src", form);

    const submitForm = getByTestId("test-form");
    expect(submitForm).toBeInTheDocument();
  });

  it("form: enables button when both email and password are entered", () => {
    const { getByText, getByLabelText } = renderComponent({
      theme: lightMode,
      JSXElement: SubmitForm,
    });

    const button = getByText("로그인");
    const email = getByLabelText("이메일");
    const password = getByLabelText("비밀번호");

    expect(button).toBeDisabled();

    fireEvent.change(email, { target: { value: "user@test.com" } });
    fireEvent.change(password, { target: { value: "test1234" } });

    expect(button).toBeEnabled();
  });
});
