import styled from "styled-components";

export const NotFound = styled.section`
  display: flex;
  flex-direction: column;

  .article-wrapper {
    display: flex;
    gap: 2rem;
    background-color: #1e48ff;
    border-radius: 1rem;
    padding: 2rem;
  }
`;

export const Article = styled.article`
  font-family: "Nanum Gothic", sans-serif;
  color: #fff;

  h2 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  pre {
    line-height: 1.4rem;
  }
`;
