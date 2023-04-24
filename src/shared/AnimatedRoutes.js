import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Details } from "../pages/Details";
import { TaskList } from "../pages/TaskList";
import { AnimatePresence } from "framer-motion";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { authUser } from "../redux/modules/auth";
import axios from "axios";

// used framer-motion to animate route transitions
export const AnimatedRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isAuth = useSelector((state) => state.authReducer.authorizedUser);
  const dispatch = useDispatch();

  //get request with token to authenticate
  const authUsers = async (token) => {
    try {
      await axios.get(`${process.env.REACT_APP_LOGIN_SERVER_URL}/user`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      if (e.response.status === 401) {
        Cookies.remove("token");
        alert(e);
        navigate("/");
      }
    }
  };

  // authenticate user on every route transition
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) authUsers(token);

    //check if cookie has expired. only alert if was logged in previously(redux state true -> false)
    if (isAuth && !token) {
      dispatch(authUser(["false", ""]));
      alert("login session has expired");
      navigate("/");
    }
  });

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.key} location={location}>
        <Route path="/" element={<TaskList />} />
        <Route path="tasks/:id" element={<Details />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
};
