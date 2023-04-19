import { Route, Routes, useLocation } from "react-router-dom";
import { Details } from "../pages/Details";
import { TaskList } from "../pages/TaskList";
import { AnimatePresence } from "framer-motion";

// used framer-motion to animate route transitions
export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.key} location={location}>
        <Route path="/" element={<TaskList />} />
        <Route path="tasks/:id" element={<Details />} />
      </Routes>
    </AnimatePresence>
  );
};
