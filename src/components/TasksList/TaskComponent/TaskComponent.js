import React from "react";
import c from "./TaskComponent.module.css";
import cn from "classnames";

const TaskComponent = ({task, destroy, doneToggle, editTask}) => {
    const {title, description, isDone, isImportant, id} = task;

    return (
        <div className={cn(c.container, {[c.container_highlighted]: isImportant})}>
            <div className={c.title}>{title}</div>
            <div className={c.description}>
                <p>{description}</p>
            </div>
            <div className={c.footer}>
                <label><input checked={isDone} type="checkbox" onChange={doneToggle}/> Done</label>
                <div className={c.controls}>
                    <button onClick={()=>editTask(task)}>Edit</button>
                    <button onClick={destroy}>Remove</button>
                </div>
            </div>
        </div>
    )
};

export default TaskComponent;