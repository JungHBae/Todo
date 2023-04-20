import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../redux/modules/tasks";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./TaskCard.css";

export const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //delete button
  function handleDelete(id) {
    dispatch(deleteTask(id));
  }

  // complete / incomplete => undo / done
  function handleStatusUpdate(id) {
    dispatch(toggleCompleted(id));
  }

  // going to Link
  function handleLinkClick() {
    navigate(`/tasks/${task.id}`);
  }
  // event.preventDefault();
  // event.stopPropagation();
  // to stop event bubbling, triggering Link click event when pressing Delete or Undo/Done buttons
  return (
    <Link onClick={handleLinkClick} to={`/tasks/${task.id}`}>
      <motion.div className="taskcard" initial={{ y: -20 }} animate={{ y: 0 }} exit={{ y: -10, opacity: 0 }}>
        <li className={task.completed ? "completed" : "incomplete"}>
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
            >
              Delete
            </button>
          </div>
        </li>
      </motion.div>
    </Link>
  );
};
