import React from "react";
import c from "./TaskComponent.module.css";

const TaskComponent = ({title}) => {

    return (
        <div className={c.container}>
            <div className={c.title}>Title text</div>
            <div className={c.description}>Description</div>
        </div>
    )
};

export default TaskComponent;