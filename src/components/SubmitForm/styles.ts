import styled from "styled-components";

export const SubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 30rem;
  border: 1px solid #ededed;
  padding: 2rem;
  border-radius: 2rem;
  background-color: #fb8210;
  box-shadow: 0.5rem 0.5rem 1rem #aaa;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .label-text {
    font-size: 1.25rem;
  }
`;

export const Input = styled.input`
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #8e8e8e;
  outline: none;
`;

export const LoginButton = styled.button`
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  background-color: #2ac1bc;
  border: none;
  outline: none;

  &:disabled {
    background-color: #ededed;
  }
`;
