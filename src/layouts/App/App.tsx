import { ThemeProvider } from "styled-components";
import useGlobalTheme from "../../hooks/useGlobalTheme";
import Home from "../../pages/Home";
import * as S from "./styles";

function App() {
  const [theme, setTheme] = useGlobalTheme();

  return (
    <ThemeProvider theme={theme}>
      <S.App>
        <button onClick={setTheme}>테마변경</button>
        <Home />
      </S.App>
    </ThemeProvider>
  );
}

export default App;
