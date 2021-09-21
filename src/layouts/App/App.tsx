import * as S from "./styles";

import { Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";

import { ReactComponent as DarkModeIcon } from "@/assets/darkmode.svg";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ReactComponent as LightModeIcon } from "@/assets/lightmode.svg";
import Spinner from "@/components/Spinner";
import { THEME } from "@/constants/styles";
import { ThemeProvider } from "styled-components";
import useGlobalTheme from "@/hooks/useGlobalTheme";

function App() {
  const [theme, setTheme, themeString] = useGlobalTheme();

  const Home = lazy(() => import("@/pages/Home"));
  const SubmitForm = lazy(() => import("@/components/SubmitForm"));
  const LoadData = lazy(() => import("@/components/LoadData"));
  const NotFound = lazy(() => import("@/components/NotFound"));

  return (
    <ThemeProvider theme={theme}>
      <S.App>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/submitForm" component={SubmitForm} />
              <Route path="/loadData" component={LoadData} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
        <S.ThemeChanger
          className="touchable"
          data-testid="touchable"
          onClick={setTheme}
        >
          {themeString === THEME.dark ? <DarkModeIcon /> : <LightModeIcon />}
        </S.ThemeChanger>
      </S.App>
    </ThemeProvider>
  );
}

export default App;
