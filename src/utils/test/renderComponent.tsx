import { DefaultTheme, ThemeProvider } from "styled-components";

import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";

type Props = {
  theme: DefaultTheme;
  JSXElement: () => JSX.Element;
};

const renderComponent = ({ theme, JSXElement }: Props) => {
  const history = createMemoryHistory();

  return render(
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <JSXElement />
      </Router>
    </ThemeProvider>
  );
};

export default renderComponent;
