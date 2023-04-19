import { TaskCard } from "../components/TaskCard";
import { useSelector } from "react-redux";
import { VerticalDivider } from "../shared/styles";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import AddTask from "../components/AddTask";
import "./TaskList.css";
import { useState } from "react";

export const TaskList = () => {
  // toggle for the AddTask dropdown component
  const [isOpen, setIsOpen] = useState(false);
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  // retrieve current state of task, redux
  const tasks = useSelector((state) => state.taskReducer.tasks);

  //move tasks according to done/ not done
  return (
    <div className="task-container">
      <motion.div
        className={`dropdown-wrapper ${isOpen ? "pushed-down" : ""}`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <AddTask toggleDropdown={toggleDropdown} />
        <div className="button-wrapper">
          <button className="dropdown-trigger" onClick={toggleDropdown} style={{ display: "flex", alignItems: "center" }}>
            Add Task
            <span className="material-symbols-outlined" style={{ marginLeft: "5px" }}>
              {isOpen ? "expand_less" : "expand_more"}
            </span>
          </button>
        </div>
      </motion.div>

      <motion.div
        className={`tasklist ${isOpen ? "pushed-down" : ""}`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3>TaskList</h3>
        <ul className="lists-wrap">
          <div className="column not-done">
            <span className="header">Not Done</span>
            <AnimatePresence>
              {tasks
                .filter((task) => task.completed === false)
                .map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
            </AnimatePresence>
          </div>
          <VerticalDivider />
          <div className="column done">
            <span className="header">Done</span>
            <AnimatePresence>
              {tasks
                .filter((task) => task.completed === true)
                .map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
            </AnimatePresence>
          </div>
        </ul>
      </motion.div>
    </div>
  );
};
