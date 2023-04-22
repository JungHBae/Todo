import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addTask } from "../api/todos";
import "./AddTask.css";

export const AddTask = ({ data, toggleDropdown }) => {
  const [task, setTask] = useState({ title: "", goal: "", completed: false });

  // state to display the focused input text length
  const [focusedInput, setFocusedInput] = useState("");
  const [showLengthText, setShowLengthText] = useState(false);

  // state to show live error messages on change of input text
  const [titleError, setTitleError] = useState("");
  const [goalError, setGoalError] = useState("");

  const handleFocus = (e) => {
    setFocusedInput(e.target.name);
    setShowLengthText(true);
  };
  const handleBlur = (e) => {
    setShowLengthText(false);
  };

  // use goal state to warn empty input
  const handleValueChange = (e) => {
    const changedValue = e.target.value;
    const targetInput = e.target.name;
    switch (targetInput) {
      case "Goal":
        if (changedValue.trim() === "") {
          setGoalError("Goal cannot be empty");
        } else {
          setGoalError("");
        }
        if (changedValue.length <= 100) {
          setTask({ ...task, goal: changedValue });
        }
        break;
      case "Title":
        if (changedValue.trim() === "") {
          setTitleError("Title cannot be empty");
        } else {
          setTitleError("");
        }
        if (changedValue.length <= 30) {
          setTask({ ...task, title: changedValue });
        }
        break;
      default:
        break;
    }
  };

  // generate unique id using Set()
  const usedIds = new Set(data.map((task) => task.id)); // since task 1 and task 2 already exists with id 1 and 2
  const generateUniqueId = () => {
    let id = Math.floor(Math.random() * 1000);
    while (usedIds.has(id)) {
      id = Math.floor(Math.random() * 1000);
    }
    usedIds.add(id);
    return id;
  };

  const queryClient = useQueryClient();
  const mutation = useMutation(addTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });
  //form submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.title.trim() === "" && task.goal.trim() === "") {
      setTitleError(() => "Title cannot be empty");
      setGoalError(() => "Goal cannot be empty");
      return;
    } else if (task.title.trim() === "") {
      setTitleError(() => "Title cannot be empty");
      return;
    } else if (task.goal.trim() === "") {
      setGoalError(() => "Goal cannot be empty");
      return;
    }
    if (goalError || titleError) {
      return;
    }
    const addedTask = {
      id: generateUniqueId(),
      title: task.title,
      goal: task.goal,
      completed: false,
    };

    mutation.mutate(addedTask);
    toggleDropdown();
    setTask({ title: "", goal: "", completed: false });
  };

  return (
    <section className="addtask">
      <form className="addtask-form" onSubmit={handleSubmit}>
        <label>Task:</label>
        {titleError && <span className="error-title">{`> ${titleError} <`}</span>}
        <input
          type="text"
          name="Title"
          placeholder="Task Name"
          autoComplete="off"
          onChange={handleValueChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={task.title}
          maxLength="30"
        />
        <label>Goal:</label>
        {goalError && <span className="error-goal">{`> ${goalError} <`}</span>}
        <textarea
          type="text"
          name="Goal"
          placeholder="Task Description"
          autoComplete="off"
          onChange={handleValueChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={task.goal}
          maxLength="100"
        />

        <button type="submit">Submit</button>
      </form>
      <div className="error-wrapper"></div>

      {showLengthText &&
        (focusedInput === "Title" ? (
          <span className="wordcount" style={titleError ? { color: "red" } : {}}>{`Title: \u00A0 ${task.title.length}/30`}</span>
        ) : (
          <span className="wordcount" style={goalError ? { color: "red" } : {}}>{`Goal: \u00A0 ${task.goal.length}/100`}</span>
        ))}
    </section>
  );
};
