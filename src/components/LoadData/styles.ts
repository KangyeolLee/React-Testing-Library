import styled from "styled-components";

export const LoadData = styled.section`
  font-family: "Nanum Gothic", sans-serif;

  .article-wrapper {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    border-radius: 1rem;
    background-color: #f4b400;
  }
`;

export const Article = styled.article`
  color: #fff;
  width: 50%;

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  img {
    width: 100%;
  }

  .sub-header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const MoreButton = styled.button`
  font-family: "Nanum Gothic", sans-serif;
  border: none;
  outline: none;
  background-color: #00a243;
  color: #fff;
  padding: 0.45rem 1rem;
  border-radius: 0.5rem;
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

export const Url = styled.div`
  margin: 0.5rem 0;
`;

export const Num = styled.span`
  font-size: 1.15rem;
  font-weight: 700;
`;
