import { Link } from "react-router-dom";
import { StyledHeader, StyledThemeButton } from "../shared/styles";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/modules/theme";
import logoImage from "../images/favicon.ico";
import { StyledReusableButton } from "../shared/styles";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { authUser } from "../redux/modules/auth";
import "./Header.css";
import jwtDecode from "jwt-decode";
import { useState } from "react";

// Header in layout
export const Header = () => {
  const dispatch = useDispatch();
  const themeName = useSelector((state) => state.themeReducer.themeName);
  const isAuth = useSelector((state) => state.authReducer.authorizedUser);
  const [userName, setUsername] = useState("");
  // console.log(isAuth);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const userToken = jwtDecode(token);
      dispatch(authUser(["true", userToken.id]));
      setUsername(userToken.id);
    }
  });

  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(authUser(["false", ""]));
  };
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
      {isAuth ? (
        <>
          <span className="username" style={{ backgroundColor: "#323232", padding: "4px 8px 4px 8px", borderRadius: "7px" }}>
            {userName}
          </span>
          <div className="transition-auth" style={{ position: "absolute", right: "10px", display: "flex", gap: "7px" }}>
            <StyledReusableButton btnColor={"#03a061"} onClick={handleLogout}>
              Logout
            </StyledReusableButton>
          </div>
        </>
      ) : (
        <div className="transition-no-auth" style={{ position: "absolute", right: "10px", display: "flex", gap: "7px" }}>
          <Link to="login">
            <StyledReusableButton btnColor={"#03a061"}>Login</StyledReusableButton>
          </Link>
          <Link to="signup">
            <StyledReusableButton btnColor={"#03a061"}>Signup</StyledReusableButton>
          </Link>
        </div>
      )}
    </StyledHeader>
  );
};
