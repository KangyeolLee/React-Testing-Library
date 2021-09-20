import { darkMode, lightMode } from "@/styles/theme";

import { THEME } from "@/constants/styles";
import { useState } from "react";

const useGlobalTheme = () => {
  const localTheme =
    localStorage.getItem("theme") === THEME.dark ? THEME.dark : THEME.light;
  const [theme, setTheme] = useState(localTheme);

  const themeMode = theme === THEME.dark ? darkMode : lightMode;

  const toggleMode = () => {
    const _theme = theme === THEME.dark ? THEME.light : THEME.dark;
    setTheme(_theme);
    localStorage.setItem("theme", _theme);
  };

  return [themeMode, toggleMode, theme] as const;
};

export default useGlobalTheme;
