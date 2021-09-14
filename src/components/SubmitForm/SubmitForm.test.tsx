import { render, fireEvent } from "@testing-library/react";
import SubmitForm from ".";

describe("<SubmitForm />", () => {
  it("enables button when both email and password are entered", () => {
    const { getByText, getByLabelText } = render(<SubmitForm />);

    const button = getByText("로그인");
    const email = getByLabelText("이메일");
    const password = getByLabelText("비밀번호");

    expect(button).toBeDisabled();

    fireEvent.change(email, { target: { value: "user@test.com" } });
    fireEvent.change(password, { target: { value: "test1234" } });

    expect(button).toBeEnabled();
  });
});
