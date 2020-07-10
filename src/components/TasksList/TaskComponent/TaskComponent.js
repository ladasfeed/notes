import React from "react";
import c from "./TaskComponent.module.css";
import cn from "classnames";
const vizual = 'card';

const TaskComponent = ({task, destroy, doneToggle, editTask}) => {
    const {title, description, isDone, isImportant, id} = task;

    function deleteSelf() {
        document.getElementById(id).style.transform = 'scale(0)'
        setTimeout(()=>{
            destroy()
        }, 400)
    }

    return (
        <div id={id} style={vizual==='row' ? {width: '100%'} : {width: '250px'}}
             className={cn(c.container, {[c.container_highlighted]: isImportant})}>
            <div className={c.title}>{title}</div>
            <div className={c.description}>
                <p>{description}</p>
            </div>
            <div className={c.footer}>
                <label><input checked={isDone} type="checkbox" onChange={doneToggle}/> Done</label>
                <div className={c.controls}>
                    <img src={require('../../../imgs/edit-button.png')} onClick={()=>editTask(task)}></img>
                    <img src={require('../../../imgs/delete-button.png')} onClick={deleteSelf}></img>
                    
                    <button onClick={editTask}>Edit</button>
                    <button onClick={destroy}>Remove</button>
                </div>
            </div>
        </div>
    )
};

export default TaskComponent;