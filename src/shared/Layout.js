import { Header } from "../components/Header";
import { StyledMain } from "./styles";
import AddTask from "../components/AddTask";

export function Layout({ children }) {
  return (
    <StyledMain>
      <Header />
      <AddTask />
      {children}
    </StyledMain>
  );
}
