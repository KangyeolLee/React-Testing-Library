import styled, { keyframes } from "styled-components";

import { Props } from "./Spinner";

const SpinnerAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerDotAnimation = keyframes`
  80%, 100% {
    transform: rotate(360deg);
  }
`;

const SpinnerDotBeforeAnimation = keyframes`
  50% {
    transform: scale(0.4);
  }
  100%, 0% {
    transform: scale(1.0);
  }
`;

export const SpinnerWrapper = styled.div<Props>`
  margin: 1rem 0;
  display: flex;
  justify-content: ${({ position }) => (position ? position : "flex-start")};
`;

export const Spinner = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  animation: ${SpinnerAnimation} 2.5s infinite linear both;
`;

export const SpinnerDot = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${SpinnerDotAnimation} 2s infinite ease-in-out both;

  &:nth-child(1) {
    animation-delay: -1.1s;
  }
  &:nth-child(2) {
    animation-delay: -1s;
  }
  &:nth-child(3) {
    animation-delay: -0.9s;
  }
  &:nth-child(4) {
    animation-delay: -0.8s;
  }
  &:nth-child(5) {
    animation-delay: -0.7s;
  }
  &:nth-child(6) {
    animation-delay: -0.6s;
  }

  &::before {
    content: "";
    display: block;
    width: 25%;
    height: 25%;
    background-color: #fff;
    border-radius: 100%;
    animation: ${SpinnerDotBeforeAnimation} 2s infinite ease-in-out both;

    &:nth-child(1) {
      animation-delay: -1.1s;
    }
    &:nth-child(2) {
      animation-delay: -1s;
    }
    &:nth-child(3) {
      animation-delay: -0.9s;
    }
    &:nth-child(4) {
      animation-delay: -0.8s;
    }
    &:nth-child(5) {
      animation-delay: -0.7s;
    }
    &:nth-child(6) {
      animation-delay: -0.6s;
    }
  }
`;
