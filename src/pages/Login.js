import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authUser } from "../redux/modules/auth";
import { StyledReusableButton } from "../shared/styles";
import Cookies from "js-cookie";
import axios from "axios";
import "./Login.css";
import jwtDecode from "jwt-decode";

export const Login = () => {
  const [user, setUser] = useState({ id: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // if already logged in, redirect to home page
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  //----------------request-------------------------//
  // Login POST request to the server
  const loginUser = async (user) => {
    try {
      const response = await axios.post("http://3.38.191.164/login", user);
      const { token } = response.data;

      setAuthToken(token); // store the token in a cookie
      const userToken = jwtDecode(token);
      console.log(userToken);
      dispatch(authUser(["true", userToken.id]));
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };
  // use received token to store in cookie
  const setAuthToken = (token) => {
    const expirationTime = new Date();
    expirationTime.setTime(expirationTime.getTime() + 10 * 60 * 1000); // 10 minutes
    Cookies.set("token", token, { expires: expirationTime });
  };

  //----------------handlers------------------------//
  // use goal state to warn empty input
  const handleValueChange = (e) => {
    const changedValue = e.target.value;
    const targetInput = e.target.name;
    switch (targetInput) {
      case "id":
        setUser({ ...user, id: changedValue });
        break;
      case "password":
        setUser({ ...user, password: changedValue });
        break;
      default:
        break;
    }
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { id, password } = user;
    if (typeof id !== "string" || !id.trim()) {
      alert("Please enter a valid ID");
      return;
    }
    if (typeof password !== "string" || !password.trim()) {
      alert("Please enter a valid password");
      return;
    }
    loginUser(user);
  };

  return (
    <motion.div
      className="login"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h3>Login</h3>

      <div>
        <div className="login-field">
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <input type="text" name="id" placeholder="ID" autoComplete="off" onChange={handleValueChange} value={user.title} maxLength="30" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              onChange={handleValueChange}
              value={user.password}
              maxLength="30"
            />

            <StyledReusableButton style={{ width: "75%", marginTop: "12px" }} btnColor={"#03a061"}>
              Login
            </StyledReusableButton>
          </form>
        </div>
      </div>
      <span>
        <Link className="back-link" to="/">{`> 돌아가기! <`}</Link>
      </span>
    </motion.div>
  );
};
