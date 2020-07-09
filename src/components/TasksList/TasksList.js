import React from "react";
import c from "./TasksList.module.css"
import TaskComponent from "../../containers/TaskComponentContainer";

const TaskList = ({tasks}) => {
    return (
        <div className={c.container}>
            {tasks.map((item, index)=>
                <TaskComponent task={item} key={item.id+index}/>
            )}
        </div>
    )
};

export default TaskList;