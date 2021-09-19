import * as S from "./styles";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ReactComponent as DarkModeIcon } from "@/assets/darkmode.svg";
import Home from "@/pages/Home";
import { ReactComponent as LightModeIcon } from "@/assets/lightmode.svg";
import LoadData from "@/components/LoadData";
import NotFound from "@/components/NotFound";
import SubmitForm from "@/components/SubmitForm/SubmitForm";
import { THEME } from "@/constants/styles";
import { ThemeProvider } from "styled-components";
import useGlobalTheme from "@/hooks/useGlobalTheme";

function App() {
  const [theme, setTheme, themeString] = useGlobalTheme();

  return (
    <ThemeProvider theme={theme}>
      <S.App>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/submitForm" component={SubmitForm} />
            <Route path="/loadData" component={LoadData} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
        <S.ThemeChanger className="touchable" onClick={setTheme}>
          {themeString === THEME.dark ? <DarkModeIcon /> : <LightModeIcon />}
        </S.ThemeChanger>
      </S.App>
    </ThemeProvider>
  );
}

export default App;
