import { Route, Routes, useLocation } from "react-router-dom";
import { Details } from "../pages/Details";
import { TaskList } from "../pages/TaskList";
import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes key={location.key} location={location}>
        <Route path="/" element={<TaskList />} />
        <Route path="tasks/:id" element={<Details />} />
      </Routes>
    </AnimatePresence>
  );
};
