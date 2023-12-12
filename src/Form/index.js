import React from "react";
import "./style.css";

const Form = () => (
    <form className=" form">
            <input
              className=" form__newTask"
              placeholder="add new task"
              name="To do"
              type="text"
              autocomplete="off"
            />
            <button className="form__button">Add new task</button>
          </form>
);

export default Form;