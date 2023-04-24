import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getTaskById, updateTask } from "../api/todos";
import { useMutation, useQuery, useQueryClient } from "react-query";
import LoadingMessage from "../utility/LoadingMessage";
import "./Details.css";
import { useSelector } from "react-redux";

export const Details = () => {
  // Get id from params
  const params = useParams();
  //check if logged in
  const userName = useSelector((state) => state.authReducer.userName);
  //-----------------requests-----------------------------------//
  //GET request for the todo list
  const { isLoading, isError, data } = useQuery(`task${params.id}`, () => getTaskById(+params.id));

  // PATCH request after editing is done and saved
  const queryClient = useQueryClient();
  const taskMutation = useMutation(updateTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("task");
    },
    // onError: () => {
    //   //wip
    // }
  });
  //-----------------------------------------------------------//

  //data to state
  const [task, setTask] = useState("");
  useEffect(() => {
    if (data) {
      setTask(data);
      setTitleLength(data.title.length);
      setGoalLength(data.goal.length);
    }
  }, [data]);

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

  // state of title and goal to validate length
  const [titleLength, setTitleLength] = useState("");
  const [goalLength, setGoalLength] = useState("");

  // state to show live error messages on change of input text
  const [titleError, setTitleError] = useState("");
  const [goalError, setGoalError] = useState("");

  // useState to toggle editing mode
  const [isEditing, setIsEditing] = useState(false);

  // Create a ref for the title input element
  // edit focus when isEditing changes to true
  const titleInputRef = useRef(null);
  useEffect(() => {
    if (isEditing) {
      titleInputRef.current.focus();
    }
  }, [isEditing]);
  //----------------------handlers---------------------------------//

  //warn empty goal input
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

  //warn empty title input
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
      setTitleError("Title cannot be empty");
      return;
    }
    if (task.goal.trim() === "") {
      setGoalError("Goal cannot be empty");
      return;
    }
    taskMutation.mutate(task);
    setIsEditing(false);
  };
  //-----------------------------------------------------------//

  // toggle Edit
  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <>
      {isLoading ? (
        <div style={{ position: "absolute", top: "270px" }}>
          <LoadingMessage />
        </div>
      ) : isError ? (
        <div style={{ margin: "140px 0 140px 0" }}>Error loading task data</div>
      ) : (
        <motion.div
          className="details"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h3>Details</h3>

          <div>
            <div className="error-wrap">
              {titleError && <span className="error">{`> ${titleError} <`}</span>}
              {goalError && <span className="error">{`> ${goalError} <`}</span>}
            </div>
            <div className={`details-taskcard ${task.completed ? "completed" : "incomplete"}`}>
              <p className="id">ID: {task.id}</p>
              {task.userId && <p className="user">By: {task.userId}</p>}
              <div className="">
                {isEditing ? (
                  <>
                    {/* edit mode */}
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
                    {/* displays the info page */}
                    <div>
                      <h5 className="title">{task.title}</h5>
                      <div className="goal">{task.goal}</div>
                    </div>
                    {userName === task.userId ? (
                      <button className="btn-edit" onClick={handleEditClick}>
                        edit
                      </button>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          <span>
            <Link to="/">{`> 돌아가기! <`}</Link>
          </span>
        </motion.div>
      )}
    </>
  );
};
