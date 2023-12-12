import React from "react";
import "./style.css";

const Buttons = (props) => {
    if (props.tasks.lenght ===0) {
       return  null
    }
    return(
        <div className="task__newButtons"></div>
    

)
};

export default Buttons;