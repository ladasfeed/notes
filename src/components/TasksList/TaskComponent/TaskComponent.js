import React from "react";
import c from "./TaskComponent.module.css";

const TaskComponent = ({task}) => {
   
    const {title, description, isDone, isImportant} = task;
    return (
        <div className={c.container}>
            <div className={c.title}>{title}</div>
            <div className={c.description}>{description}</div>
        </div>
    )
};

export default TaskComponent;