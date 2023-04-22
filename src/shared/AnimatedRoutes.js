import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Details } from "../pages/Details";
import { TaskList } from "../pages/TaskList";
import { AnimatePresence } from "framer-motion";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";

// used framer-motion to animate route transitions
export const AnimatedRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

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
