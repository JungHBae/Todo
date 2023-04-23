import { Link } from "react-router-dom";
import { deleteTask, updateDone } from "../api/todos";
import { useMutation, useQueryClient } from "react-query";
import { motion } from "framer-motion";
import "./TaskCard.css";
import { useState } from "react";
import LoadingMessage from "./LoadingMessage";

export const TaskCard = ({ task }) => {
  //show loading component when loading
  const [isLoading, setIsLoading] = useState(false);

  const queryClient = useQueryClient();
  //delete request
  function handleDelete(id) {
    setIsLoading(true);
    delmutation.mutate(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const delmutation = useMutation(deleteTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
    onError: () => {
      setIsLoading(false);
    },
  });

  // PATCH request
  function handleStatusUpdate() {
    setIsLoading(true);
    completedMutation.mutate(task);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const completedMutation = useMutation(updateDone, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
    onError: () => {
      setIsLoading(false);
    },
  });

  // event.preventDefault();
  // event.stopPropagation();
  // to stop event bubbling, triggering Link click event when pressing Delete or Undo/Done buttons
  return (
    <Link to={`/tasks/${task.id}`}>
      <motion.div className="taskcard" initial={{ y: -20 }} animate={{ y: 0 }} exit={{ y: -10, opacity: 0 }}>
        <li className={task.completed ? "completed" : "incomplete"}>
          {isLoading ? (
            <div className="taskcard" style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "14px" }}>
              <LoadingMessage />
            </div>
          ) : (
            <>
              <h5 className="title">{task.title}</h5>
              <div className="goal">{task.goal}</div>
              <div className="buttons-wrap">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    handleStatusUpdate(task.id);
                  }}
                  className={`status${!task.completed ? "" : " done"}`}
                  disabled={isLoading}
                >
                  {task.completed ? "Undone" : "Done"}
                </button>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    handleDelete(task.id);
                  }}
                  className="delete"
                  disabled={isLoading}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      </motion.div>
    </Link>
  );
};
