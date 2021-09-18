import styled from "styled-components";

export const App = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.background};
  padding: 3rem;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  transition: background-color 0.25s ease-in-out;
`;

export const ThemeChanger = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.color.text};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 25px;
    height: 25px;
    stroke: ${({ theme }) => theme.color.background};
  }
`;
