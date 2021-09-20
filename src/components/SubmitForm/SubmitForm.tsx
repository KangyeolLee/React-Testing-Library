import * as S from "./styles";

import { Link } from "react-router-dom";
import form from "@/assets/form.png";
import { useState } from "react";

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
    <S.Section className="container">
      <div className="header-wrapper">
        <h1 className="section-title">폼 제출 테스트</h1>
        <Link className="touchable" to="/">
          홈으로
        </Link>
      </div>

      <div className="article-wrapper">
        <S.Article>
          <img draggable="false" src={form} alt="폼 관련 이미지" />
        </S.Article>

        <S.Article>
          <S.SubmitForm onSubmit={handleSubmitForm} data-testid="test-form">
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
        </S.Article>
      </div>
    </S.Section>
  );
};

export default SubmitForm;
