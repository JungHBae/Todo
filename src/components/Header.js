import { Link } from "react-router-dom";
import { StyledHeader } from "../shared/styles";

// Header in layout
export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">My Todo List</Link>
    </StyledHeader>
  );
};
