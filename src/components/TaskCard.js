import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../redux/modules/tasks";
import { Link, useNavigate } from "react-router-dom";
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

  // Needed to add scroll to top to prevent unnatural movement before going to Link
  function handleLinkClick() {
    window.scrollTo(0, 0);
    navigate(`/tasks/${task.id}`);
  }
  // event.preventDefault();
  // event.stopPropagation();
  // to stop event bubbling, triggering Link click event when pressing Delete or Undo/Done buttons
  return (
    <Link onClick={handleLinkClick} to={`/tasks/${task.id}`}>
      <div className="taskcard">
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
      </div>
    </Link>
  );
};
