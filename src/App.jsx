import Router from "./shared/Router";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme } from "./shared/styles";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledThemeButton } from "./shared/styles";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledThemeButton onClick={toggleTheme}>
        <FontAwesomeIcon icon={theme === lightTheme ? faMoon : faSun} size="2x" />
      </StyledThemeButton>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
