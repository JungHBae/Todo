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

// used framer-motion to animate route transitions
export const AnimatedRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  //check if cookie has expired. only alert if was logged in previously(redux state true -> false)
  const isAuth = useSelector((state) => state.authReducer.authorizedUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = Cookies.get("token");
    if (isAuth && !token) {
      dispatch(authUser("false"));
      alert("login session has expired");
    }
  });

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.key} location={location}>
        <Route path="/" element={<TaskList />} />
        <Route path="tasks/:id" element={<Details onBackClick={handleBackClick} />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
};
