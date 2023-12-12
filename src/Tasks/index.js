import React from "react";
import "./style.css"

const Tasks = (props) => (
  <ul className=" task__list">
    {props.tasks.map((task) => (
      <li
       className={`task__list ${task.done && props.hideDoneTasks ? " task__list--hidden" : ""}`}><button className="task__js--done">
       {task.done ? "✔" : ""}
       </button>
       <span className={`task__content ${task.done ? "task__content--done" : ""}`}>
       {task.content}
       </span>
       <button className="task__js--remove">
        🗑
       </button>
       </li>
    ))}
  </ul>
);
export default Tasks;
