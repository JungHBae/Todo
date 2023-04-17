import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Details } from "../pages/Details";
import { TaskList } from "../pages/TaskList";
import "./AnimatedRoutes.css";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<TaskList />} />
          <Route path="tasks/:id" element={<Details />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};
