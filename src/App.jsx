import Router from "./shared/Router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./shared/styles";
import { useSelector } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const theme = useSelector((state) => state.themeReducer.theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
