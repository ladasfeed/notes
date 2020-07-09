import React from "react";
import c from "./TasksList.module.css"
import TaskComponent from "./TaskComponent/TaskComponent";
import NewTaskComponent from './NewTaskComponent/NewTaskComponent'

const TaskList = ({tasks, removeSelf, isDoneToggle}) => {
    return (
        <div className={c.container}>
            {tasks.map((item, index)=>
                <TaskComponent destroy={() => removeSelf(item.id)}
                               doneToggle={() => isDoneToggle(item.id)}
                               task={item}
                               key={item.id+index}/>
            )}
            <NewTaskComponent />
        </div>
    )
};

export default TaskList;