import React from "react";
import c from "./TaskComponent.module.css";
import cn from "classnames";


const TaskComponent = ({task, destroy, doneToggle, editTask, bgColor, view}) => {
    const {title, description, isDone, isImportant, id} = task;

    function deleteSelf() {
        document.getElementById(id).style.transform = 'scale(0)'
        setTimeout(()=>{
            destroy()
        }, 400)
    }

    return (
        <div id={id} style={bgColor}
             className={cn(c.container, {
                 [c.container_highlighted]: isImportant,
                 [c.container_cards]: view === "cards",
                 [c.container_row]: view === "row"
             })}>
            <div className={c.title}>{title}</div>
            <div className={c.description}>
                <p>{description}</p>
            </div>
            <div className={c.footer}>
                <label><input checked={isDone} type="checkbox" onChange={doneToggle}/> Done</label>
                <div className={c.controls}>
                    <img src={require('../../../imgs/edit-button.png')} onClick={editTask}/>
                    <img src={require('../../../imgs/delete-button.png')} onClick={deleteSelf}/>
                </div>
            </div>
        </div>
    )
};

export default TaskComponent;