import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { editTask, toggleCompleted } from "../redux/modules/tasks";
import { motion } from "framer-motion";
import "./Details.css";

export const Details = () => {
  // Get id from params
  const params = useParams();
  // use state of Task, which was taken from redux store using useSelector to find the task of the id given throug parameter
  const [task, setTask] = useState(useSelector((state) => state.taskReducer.find((task) => task.id === +params.id)));
  const dispatch = useDispatch();

  // state of title and goal to validate length
  const [titleLength, setTitleLength] = useState(task.title.length);
  const [goalLength, setGoalLength] = useState(task.goal.length);
  // state to display the focused input text length
  const [focusedInput, setFocusedInput] = useState("");
  const [showLengthText, setShowLengthText] = useState(false);
  const handleFocus = (e) => {
    setFocusedInput(e.target.name);
    setShowLengthText(true);
  };
  const handleBlur = (e) => {
    setShowLengthText(false);
  };

  // complete / incomplete => undo / done
  // very important not to dispatch, as we are still in editing mode.
  // ONLY DISPATCH ON SAVE EVENT
  function handleStatusUpdate(id) {
    setTask((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
  }
  // useState to toggle editing mode
  const [isEditing, setIsEditing] = useState(false);

  // state to show live error messages on change of input text
  const [titleError, setTitleError] = useState("");
  const [goalError, setGoalError] = useState("");

  // Create a ref for the title input element
  // Use useEffect to do an inital edit focus to the title input when the component mounts and when isEditing changes to true
  const titleInputRef = useRef(null);
  useEffect(() => {
    if (isEditing) {
      titleInputRef.current.focus();
    }
  }, [isEditing]);

  // use goal state to warn empty input
  const handleGoalChange = (e) => {
    const newGoal = e.target.value;
    if (newGoal.trim() === "") {
      setGoalError("Goal cannot be empty");
    } else {
      setGoalError("");
    }
    if (e.target.value.length <= 100) {
      setTask({ ...task, goal: newGoal });
      setGoalLength(newGoal.length);
    }
  };

  // use title state to warn empty input
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    if (newTitle.trim() === "") {
      setTitleError("Title cannot be empty");
    } else {
      setTitleError("");
    }
    if (e.target.value.length <= 30) {
      setTask({ ...task, title: newTitle });
      setTitleLength(newTitle.length);
    }
  };

  // save handler
  const handleSaveClick = () => {
    if (task.title.trim() === "") {
      setTitleError("Title cannot be empty"); //prevent empty save
      return;
    }
    if (task.goal.trim() === "") {
      setGoalError("Goal cannot be empty"); //prevent empty save
      return;
    }
    dispatch(toggleCompleted(task.id));
    dispatch(editTask(task));
    setIsEditing(false);
  };

  // Edit handler to show display releveant card (edit page/info page)
  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <motion.div
      className="details"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3>Details</h3>
      {titleError && <span className="error">{`> ${titleError} <`}</span>}
      {goalError && <span className="error">{`> ${goalError} <`}</span>}
      <div className={`details-taskcard ${task.completed ? "completed" : "incomplete"}`}>
        <p className="id">ID: {task.id}</p>

        {isEditing &&
          (task.completed ? (
            <button
              onClick={() => {
                handleStatusUpdate(task.id);
              }}
              className={`status ${!task.completed ? "undone" : "done"}`}
            >
              Undone
            </button>
          ) : (
            <button
              onClick={() => {
                handleStatusUpdate(task.id);
              }}
              className={`status ${!task.completed ? "undone" : "done"}`}
            >
              Done
            </button>
          ))}
        <div className="">
          {isEditing ? (
            <>
              {/* displays the text editor */}
              <h5 className="title">
                <input
                  name="title"
                  type="text"
                  value={task.title}
                  onChange={handleTitleChange}
                  maxLength="30"
                  ref={titleInputRef}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </h5>
              <div className="goal">
                <textarea
                  name="goal"
                  value={task.goal}
                  onChange={handleGoalChange}
                  rows="3"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  maxLength="100"
                />
                {showLengthText &&
                  (focusedInput === "title" ? (
                    <span style={titleError ? { color: "red" } : {}}>{`Title: \u00A0 ${titleLength}/30`}</span>
                  ) : (
                    <span style={goalError ? { color: "red" } : {}}>{`Goal: \u00A0 ${goalLength}/100`}</span>
                  ))}
              </div>
              <button className="btn-save" onClick={handleSaveClick}>
                Save
              </button>
            </>
          ) : (
            <>
              <div>
                {/* displays the info page */}
                <h5 className="title">{task.title}</h5>
                <div className="goal">{task.goal}</div>
              </div>
              <button className="btn-edit" onClick={handleEditClick}>
                edit
              </button>
            </>
          )}
        </div>
      </div>

      <span>
        <Link to="/">{`> 돌아가기! <`}</Link>
      </span>
    </motion.div>
  );
};
