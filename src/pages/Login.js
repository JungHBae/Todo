import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { authUser } from "../redux/modules/auth";
import { useEffect } from "react";

export const Login = () => {
  const [user, setUser] = useState({ id: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const loginUser = async (user) => {
    try {
      const response = await axios.post("http://3.38.191.164/login", user);
      const { token } = response.data;
      Cookies.set("token", token); // store the token in a cookie
      setLoggedIn(true); // update state to show that the user is logged in
    } catch (error) {
      console.error(error);
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedIn) {
      dispatch(authUser("true"));
      navigate("/");
    }
  }, [loggedIn]);
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

  return (
    <motion.div
      className="details"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h3>Login</h3>

      <div>
        <div>
          <form
            className="signup-form"
            onSubmit={(e) => {
              e.preventDefault();
              loginUser(user);
            }}
          >
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

            <button type="submit"></button>
          </form>
        </div>
      </div>
      <span>
        <Link to="/">{`> 돌아가기! <`}</Link>
      </span>
    </motion.div>
  );
};
