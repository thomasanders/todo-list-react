import React from "react";

const Tasks = (props) => (
  <ul className=" task__list">
    {props.tasks.map((task) => (
      <li>{task.content}</li>
    ))}
  </ul>
);
export default Tasks;
