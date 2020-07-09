import React from "react";
import c from "./TasksList.module.css"
import TaskComponent from "./TaskComponent/TaskComponent";

const TaskList = (props) => {

    return (
        <div className={c.container}>
            <TaskComponent/>
            <TaskComponent/>
            <TaskComponent/>
            <TaskComponent/>
            <TaskComponent/>
        </div>
    )
};

export default TaskList;