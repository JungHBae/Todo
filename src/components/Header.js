import { Link } from "react-router-dom";
import { StyledHeader, StyledThemeButton } from "../shared/styles";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/modules/theme";
import logoImage from "../images/favicon.ico";
import { StyledReusableButton } from "../shared/styles";
// Header in layout
export const Header = () => {
  const dispatch = useDispatch();
  const themeName = useSelector((state) => state.themeReducer.themeName);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <StyledHeader className="header-style">
      <StyledThemeButton onClick={handleToggle}>
        <FontAwesomeIcon icon={themeName === "LIGHT_THEME" ? faMoon : faSun} size="2x" />
      </StyledThemeButton>
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <img src={logoImage} alt="logoImage" style={{ maxHeight: "30px", maxWidth: "30px" }} />
        <h3>Todo</h3>
      </Link>
      <div style={{ position: "absolute", right: "10px", display: "flex", gap: "7px" }}>
        <StyledReusableButton btnColor={"#03a061"}>Login</StyledReusableButton>
        <StyledReusableButton btnColor={"#03a061"}>Signu</StyledReusableButton>
      </div>
    </StyledHeader>
  );
};
