import { VerticalDivider } from "../shared/styles";
import { TaskCard } from "../components/TaskCard";
import { AddTask } from "../components/AddTask";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useQuery } from "react-query";
import { getTasks } from "../api/todos";
import LoadingMessage from "../utility/LoadingMessage";
import "./TaskList.css";

export const TaskList = () => {
  // toggle for the AddTask dropdown component
  const [isOpen, setIsOpen] = useState(false);
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  // GET request for tasks
  const { isLoading, isError, data } = useQuery("tasks", getTasks);

  //move tasks according to done/ not done
  return (
    <div className="task-container">
      {data ? (
        <motion.div
          className={`dropdown-wrapper ${isOpen ? "pushed-down" : ""}`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <AddTask data={data} toggleDropdown={toggleDropdown} />

          <div className="button-wrapper">
            <button className="dropdown-trigger" onClick={toggleDropdown} style={{ display: "flex", alignItems: "center" }}>
              Add Task
              <span className="material-symbols-outlined" style={{ marginLeft: "5px" }}>
                {isOpen ? "expand_less" : "expand_more"}
              </span>
            </button>
          </div>
        </motion.div>
      ) : (
        <div></div>
      )}

      <motion.div
        className={`tasklist ${isOpen ? "pushed-down" : ""}`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h3>TaskList</h3>
        {isLoading ? (
          <div style={{ position: "absolute", top: "300px" }}>
            <LoadingMessage />
          </div>
        ) : isError ? (
          <div style={{ margin: "145px 0 145px 0" }}>Error loading task data</div>
        ) : (
          <ul className="lists-wrap">
            <div className="column not-done">
              <span className="header">Not Done</span>
              <AnimatePresence>
                {data
                  ?.filter((task) => task.completed === false)
                  .map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
              </AnimatePresence>
            </div>
            <VerticalDivider />
            <div className="column done">
              <span className="header">Done</span>
              <AnimatePresence>
                {data
                  ?.filter((task) => task.completed === true)
                  .map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
              </AnimatePresence>
            </div>
          </ul>
        )}
      </motion.div>
    </div>
  );
};
