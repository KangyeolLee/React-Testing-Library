import styled from "styled-components";

type CardProps = {
  bgColor: string;
};

export const Home = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const HomeCard = styled.section<CardProps>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${({ bgColor }) => bgColor};
  width: 33%;
  max-width: 20rem;
  height: 30rem;
  box-sizing: border-box;
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
`;
