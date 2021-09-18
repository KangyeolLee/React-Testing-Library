import { useState } from "react";
import * as S from "./styles";

const SubmitForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("제출합니다~");
  };

  return (
    <S.SubmitForm onSubmit={handleSubmitForm}>
      <S.Label>
        <span className="label-text">이메일</span>
        <S.Input
          name="email"
          type="email"
          placeholder="이메일 입력"
          value={email}
          onChange={(e) => handleOnChangeInput(e)}
        />
      </S.Label>

      <S.Label>
        <span className="label-text">비밀번호</span>
        <S.Input
          name="password"
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => handleOnChangeInput(e)}
        />
      </S.Label>

      <S.LoginButton disabled={!email || !password}>로그인</S.LoginButton>
    </S.SubmitForm>
  );
};

export default SubmitForm;
