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
    console.log(view)
    return (
        <div id={id} style={view==='row' ? {width: '100%', ...bgColor} : {width: '250px', ...bgColor}}
             className={cn(c.container, {[c.container_highlighted]: isImportant})}>
            <div className={c.title}>{title}</div>
            <div className={c.description}>
                <p>{description}</p>
            </div>
            <div className={c.footer}>
                <label><input checked={isDone} type="checkbox" onChange={doneToggle}/> Done</label>
                <div className={c.controls}>
                    <img src={require('../../../imgs/edit-button.png')} onClick={editTask}></img>
                    <img src={require('../../../imgs/delete-button.png')} onClick={deleteSelf}></img>
                </div>
            </div>
        </div>
    )
};

export default TaskComponent;