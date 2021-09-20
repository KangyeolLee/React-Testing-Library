import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.text};
    border-radius: 1rem;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.text};
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 700;
  margin-bottom: 2rem;
`;
