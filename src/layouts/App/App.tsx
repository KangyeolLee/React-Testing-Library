import { ThemeProvider } from "styled-components";
import useGlobalTheme from "@/hooks/useGlobalTheme";
import Home from "@/pages/Home";
import * as S from "./styles";
import { ReactComponent as DarkModeIcon } from "@/assets/darkmode.svg";
import { ReactComponent as LightModeIcon } from "@/assets/lightmode.svg";
import { THEME } from "@/constants/styles";

function App() {
  const [theme, setTheme, themeString] = useGlobalTheme();

  return (
    <ThemeProvider theme={theme}>
      <S.App>
        <Home />
        <S.ThemeChanger className="touchable" onClick={setTheme}>
          {themeString === THEME.dark ? <DarkModeIcon /> : <LightModeIcon />}
        </S.ThemeChanger>
      </S.App>
    </ThemeProvider>
  );
}

export default App;
