import { Link } from "react-router-dom";
import { StyledHeader } from "../shared/styles";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledThemeButton } from "../shared/styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/modules/theme";

// Header in layout
export const Header = () => {
  const dispatch = useDispatch();
  const themeName = useSelector((state) => state.themeReducer.themeName);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <StyledHeader>
      <StyledThemeButton onClick={handleToggle}>
        <FontAwesomeIcon icon={themeName === "LIGHT_THEME" ? faMoon : faSun} size="2x" />
      </StyledThemeButton>
      <Link to="/">
        <h3>My Todo List</h3>
      </Link>
    </StyledHeader>
  );
};
