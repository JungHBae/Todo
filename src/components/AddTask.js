import "./AddTask.css";
import { useState } from "react";

//AddTask
export const AddTask = ({ tasks, setTasks }) => {
  const [taskValue, setTaskValue] = useState(""); //set task
  const [goal, setGoal] = useState(""); //set task
  // handle change
  const handleTaskChange = (event) => {
    setTaskValue(event.target.value);
  };
  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };
  //form submit handler
  const handleSubmit = (event) => {
    event.preventDefault();

    const task = {
      id: Math.floor(Math.random() * 10000),
      title: taskValue,
      goal: goal,
      completed: false,
    };
    console.log(task);
    setTasks([...tasks, task]);
    setTaskValue("");
  };
  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Task:</label>
        <input onChange={handleTaskChange} type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" value={taskValue} />
        <label htmlFor="">Goal:</label>
        <input onChange={handleGoalChange} type="text" name="goal" id="goal" placeholder="Task Goal" autoComplete="off" value={goal} />
        <button type="submit">Add Task</button>
      </form>
      {/* <p>{taskValue}</p> */}
      {/* <p>{goal}</p> */}
      {/* <p>{progress}</p> */}
    </section>
  );
};
