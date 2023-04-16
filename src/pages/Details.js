import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { editTask } from "../redux/modules/tasks";

import "./Details.css";

export const Details = () => {
  // Get id from params
  const params = useParams();
  const [task, setTask] = useState(useSelector((state) => state.taskReducer.tasks.find((task) => task.id === +params.id)));
  const [isEditing, setIsEditing] = useState(false);
  const [currentNumberOfCharacters, setCurrentNumberOfCharacters] = useState(task.goal.length);
  const [titleError, setTitleError] = useState("");
  const [goalError, setGoalError] = useState("");

  const dispatch = useDispatch();

  // Create a ref for the title input element
  const titleInputRef = useRef(null);

  // Use useEffect to focus the input element when the component mounts and when isEditing changes to true
  useEffect(() => {
    if (isEditing) {
      titleInputRef.current.focus();
    }
  }, [isEditing]);

  const handleGoalChange = (e) => {
    const newGoal = e.target.value;
    if (newGoal.trim() === "") {
      setGoalError("Goal cannot be empty");
    } else {
      setGoalError("");
    }
    if (e.target.value.length <= 100) {
      setTask({ ...task, goal: newGoal });
      setCurrentNumberOfCharacters(newGoal.length);
    }
  };
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    if (newTitle.trim() === "") {
      setTitleError("Title cannot be empty");
    } else {
      setTitleError("");
    }
    setTask({ ...task, title: newTitle });
  };

  const handleSaveClick = () => {
    if (task.title.trim() === "") {
      setTitleError("Title cannot be empty");
      return;
    } else {
      setTitleError("");
    }

    if (task.goal.trim() === "") {
      setGoalError("Goal cannot be empty");
      return;
    } else {
      setGoalError("");
    }

    dispatch(editTask(task));
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="details">
      <h1>My Task Info</h1>
      {titleError && <span className="error">{`> ${titleError} <`}</span>}
      {goalError && <span className="error">{`> ${goalError} <`}</span>}
      <div onClick={isEditing ? null : handleEditClick} className={`details-taskcard ${task.completed ? "completed" : "incomplete"}`}>
        <p className="id">ID: {task.id}</p>
        <div>
          {isEditing ? (
            <>
              <h5 className="title">
                <input type="text" value={task.title} onChange={handleTitleChange} maxLength="30" ref={titleInputRef} />
              </h5>
              <div className="goal">
                <textarea value={task.goal} onChange={handleGoalChange} rows="3" />
                <span>{currentNumberOfCharacters}/100</span>
              </div>
              <button className="save" onClick={handleSaveClick}>
                Save
              </button>
            </>
          ) : (
            <div>
              <h5 className="title">{task.title}</h5>
              <div className="goal">{task.goal}</div>
            </div>
          )}
        </div>
      </div>

      <span>
        <Link to="/">{`> 돌아가기! <`}</Link>
      </span>
    </div>
  );
};
