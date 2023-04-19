import { Header } from "../components/Header";
import { StyledMain } from "./styles";

export function Layout({ children }) {
  // Layout component, Header as fixed layout. no footer
  return (
    <StyledMain>
      <Header />
      {children}
    </StyledMain>
  );
}
