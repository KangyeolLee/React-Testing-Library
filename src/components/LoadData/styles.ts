import styled from "styled-components";

export const LoadData = styled.section`
  .article-wrapper {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    border-radius: 1rem;
    background-color: #f4b400;
  }
`;

export const Article = styled.article`
  font-family: "Nanum Gothic", sans-serif;
  color: #fff;
  width: 50%;

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  img {
    width: 100%;
  }
`;
