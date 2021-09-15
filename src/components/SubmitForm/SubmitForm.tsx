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
    console.log("제출합니다~");
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <label>
        이메일
        <input
          name="email"
          type="email"
          placeholder="이메일 입력"
          value={email}
          onChange={(e) => handleOnChangeInput(e)}
        />
      </label>

      <label>
        비밀번호
        <input
          name="password"
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => handleOnChangeInput(e)}
        />
      </label>

      <button disabled={!email || !password}>로그인</button>
    </form>
  );
};

export default SubmitForm;
