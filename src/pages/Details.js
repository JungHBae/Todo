import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./Details.css";

export const Details = () => {
  //Get id from params
  const params = useParams();
  const [task] = useSelector((state) => state.taskReducer.tasks.filter((task) => task.id === +params.id));

  return (
    <div className="details">
      <h1>My Task Info</h1>
      <span> {`> 카드를 클릭해서 돌아가기! <`}</span>
      <Link to="/">
        <div className={`details-taskcard ${task.completed ? "completed" : "incomplete"}`}>
          <p className="id">ID: {task.id}</p>
          <div>
            <h5 className="title">{task.title}</h5>
            <div className="goal">{task.goal}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
