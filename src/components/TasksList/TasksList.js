import React, {useState} from "react";
import c from "./TasksList.module.css"
import TaskComponent from "./TaskComponent/TaskComponent";
import NewTaskComponent from './NewTaskComponent/NewTaskComponent';
import EditComponent from './EditComponent/EditComponent'

const TaskList = ({tasks, removeSelf, isDoneToggle, vizual}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editingTask, setEditingTask] = useState('');

    function editTask(task) {
        setEditingTask(task)
        setIsEditing(true)
    }

    function stopEditing() {
        setIsEditing(false)
    }

   

    return (
        <div className={c.container}>
            {tasks.map((item, index)=>
                <TaskComponent destroy={() => removeSelf(item.id)}
                               doneToggle={() => isDoneToggle(item.id)}
                               task={item}
                               key={item.id+index}
                               editTask={() => editTask(item)}
                               />
            )}

            <NewTaskComponent />
            {isEditing && <EditComponent
                initialValues={{
                    title: editingTask.title,
                    description: editingTask.description,
                    isImportant: editingTask.isImportant
                }}
                stopEditing={stopEditing}
                editingTask={editingTask}
            />
            }
            
        </div>
    )
};

export default TaskList;