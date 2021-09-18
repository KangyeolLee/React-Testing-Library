import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  .container {
    max-width: 1080px;
    margin: auto;
    padding: 0 2rem;
  }

  .touchable {
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }
  }
`;

export default GlobalStyle;
