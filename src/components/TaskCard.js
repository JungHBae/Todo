import "./TaskCard.css";

export const TaskCard = ({ task, handleDelete, handleStatusUpdate }) => {
  return (
    <div className="taskcard">
      <li className={task.completed ? "completed" : "incomplete"}>
        <h5 className="title">{task.title}</h5>
        <div className="goal">{task.goal}</div>
        <div className="buttons-wrap">
          <button onClick={() => handleDelete(task.id)} className="delete">
            Delete
          </button>
          <button onClick={() => handleStatusUpdate(task.id)} className="status">
            {task.completed ? "Undo" : "Done"}
          </button>
        </div>
      </li>
    </div>
  );
};
