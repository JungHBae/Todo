import { TaskCard } from "./TaskCard";
import "./TaskList.css";
import "./AddTask.css";

export const TaskList = ({ tasks, setTasks }) => {
  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function handleStatusUpdate(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <section className="tasklist">
      <h1>TaskList</h1>
      <ul className="lists-wrap">
        <div className="column done">
          <span>Done</span>
          {tasks
            .filter((task) => task.completed === true)
            .map((task) => (
              <TaskCard key={task.id} task={task} handleDelete={handleDelete} handleStatusUpdate={handleStatusUpdate} />
            ))}
        </div>
        <div className="column not-done">
          <span>Not Done</span>
          {tasks
            .filter((task) => task.completed === false)
            .map((task) => (
              <TaskCard key={task.id} task={task} handleDelete={handleDelete} handleStatusUpdate={handleStatusUpdate} />
            ))}
        </div>
      </ul>
    </section>
  );
};
