import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../redux/modules/tasks";
import { Link } from "react-router-dom";
import "./TaskCard.css";

export const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  //delete button
  function handleDelete(id) {
    dispatch(deleteTask(id));
  }

  // complete / incomplete => undo / done
  function handleStatusUpdate(id) {
    dispatch(toggleCompleted(id));
  }

  return (
    <Link to={`/tasks/${task.id}`}>
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
              {task.completed ? "Undo" : "Done"}
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
