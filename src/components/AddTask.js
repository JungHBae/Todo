import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/modules/tasks";

import React from "react";
import "./AddTask.css";

//AddTask
const AddTask = () => {
  const usedIds = new Set();
  const generateUniqueId = () => {
    let id = Math.floor(Math.random() * 1000);
    while (usedIds.has(id)) {
      id = Math.floor(Math.random() * 1000);
    }
    usedIds.add(id);
    return id;
  };

  const taskName = useRef("");
  const goal = useRef("");

  //focus task name field on load
  useEffect(() => {
    taskName.current.focus();
  }, []);

  //form submit handler
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    const task = {
      id: generateUniqueId(),
      title: taskName.current.value,
      goal: goal.current.value,
      completed: false,
    };
    dispatch(addTask(task));

    //reset on submit
    taskName.current.value = "";
    goal.current.value = "";
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Task:</label>
        <input type="text" name="task" id="task" placeholder="Task Name" autoComplete="off" ref={taskName} />
        <label htmlFor="">Goal:</label>
        <input type="text" name="goal" id="goal" placeholder="Task Goal" autoComplete="off" ref={goal} />
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
};

export default React.memo(AddTask);
