import {
    ADD_NEW_TASK,
    IS_DONE_TOGGLE
} from '../types/types'

export const addNewTaskAC = () => {
    return (dispatch, getState) => {
        const {
            newTitle,
            newDescription,
            newIsDone,
            newIsImportant
        } = getState().taskListReducer;
        const newDate = new Date();

        dispatch({
            type: ADD_NEW_TASK,
            newTask: {
                newTitle,
                newDescription,
                newIsDone,
                newIsImportant,
                newDate: newDate.toString(),
                id: newDate.now()
            }
        })
    }
}

export const isDoneToggle = (id) => {
    return (dispatch, getState) => {
        let tasks = getState().taskListReducer.tasks;
        
        tasks = tasks.map(item=>{
            if (item.id == id)
                item.isDone = !item.isDone;
            return item
        })
        console.log(tasks)
        dispatch ({
            type: IS_DONE_TOGGLE,
            payload: tasks
        })
    }
}