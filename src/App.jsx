import Router from "./shared/Router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./shared/styles";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.themeReducer.theme);
  const themeName = useSelector((state) => state.themeReducer.themeName);
  // const getData = async () => {
  //   const a = await fetch("http://localhost:4000/tasks");
  //   const b = await a.json();
  //   return[...b];
  // };
  // getData();
  return (
    <ThemeProvider theme={theme} themeName={themeName}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
