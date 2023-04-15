import { TaskCard } from "../components/TaskCard";
import { useSelector } from "react-redux";
import { VerticalDivider } from "../shared/styles";
import "./TaskList.css";

export const TaskList = () => {
  // retrieve current state of task, re-render TaskList
  const tasks = useSelector((state) => state.taskReducer.tasks);

  //move tasks according to done/ not done
  return (
    <div className="tasklist">
      <h1>TaskList</h1>
      <ul className="lists-wrap">
        <div className="column not-done">
          <span className="header">Not Done</span>
          {tasks
            .filter((task) => task.completed === false)
            .map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
        </div>
        <VerticalDivider />
        <div className="column done">
          <span className="header">Done</span>
          {tasks
            .filter((task) => task.completed === true)
            .map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
        </div>
      </ul>
    </div>
  );
};
