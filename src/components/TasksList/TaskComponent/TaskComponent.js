import React from "react";
import c from "./TaskComponent.module.css";

const TaskComponent = ({task, removeSelf}) => {
    
    const {title, description, isDone, isImportant, id} = task;

    function destroy() {
        removeSelf(id)
    }

    return (
        <div className={c.container}>
            <div className={c.title}>{title}</div>
            <div className={c.description}>{description}</div>
            <div onClick={destroy}>RM</div>
        </div>
    )
};

export default TaskComponent;