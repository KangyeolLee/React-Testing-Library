import styled from "styled-components";

export const Section = styled.section`
  .article-wrapper {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    border-radius: 1rem;
    background-color: #ff791e;
  }
`;

export const Article = styled.article`
  width: 50%;

  img {
    width: 100%;
  }
`;

export const SubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .label-text {
    font-size: 1.15rem;
    font-weight: 700;
    color: #fff;
  }
`;

export const Input = styled.input`
  padding: 1rem;
  border-radius: 1rem;
  border: none;
  outline: none;

  &:focus {
    margin: -2px;
    border: 2px solid #00a243;
  }
`;

export const LoginButton = styled.button`
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.15rem;
  font-weight: 700;
  background-color: #00a243;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;

  &:disabled {
    background-color: #e1e1e1;
    cursor: default;

    &:hover {
      opacity: 1;
    }
  }

  &:hover {
    opacity: 0.85;
  }
`;
