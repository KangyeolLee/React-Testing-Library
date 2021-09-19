import styled from "styled-components";

type CardProps = {
  bgColor: string;
};

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 3rem;
    font-family: "Nanum Gothic", sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.color.text};
  }

  .card-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    a {
      position: relative;
      text-decoration: none;
    }
  }
`;
export const HiddenContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transform: translateY(100%);
  opacity: 0;
  color: #fff;
  transition: opacity 0.45s ease-in-out, transform 0.3s ease-in-out;
  z-index: 10;
`;

export const HomeCard = styled.article<CardProps>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${({ bgColor }) => bgColor};
  width: 100%;
  max-width: 20rem;
  height: 30rem;
  box-sizing: border-box;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  .article-title {
    font-family: "Nanum Gothic", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: #fff;
  }

  &:hover {
    transform: translateY(-0.5rem);

    ${HiddenContent} {
      opacity: 1;
      transform: translateY(0);
    }

    img {
      opacity: 0.55;
    }
  }

  img {
    transition: opacity 0.45s ease-in-out;
    position: absolute;
    width: 100%;
    bottom: 1rem;
    left: 0;
  }
`;
