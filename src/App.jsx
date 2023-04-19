import Router from "./shared/Router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./shared/styles";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.themeReducer.theme);
  const themeName = useSelector((state) => state.themeReducer.themeName);

  return (
    <ThemeProvider theme={theme} themeName={themeName}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
