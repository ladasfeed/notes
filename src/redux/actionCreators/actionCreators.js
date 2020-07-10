import {
    ADD_NEW_TASK,
    IS_DONE_TOGGLE,
    CHANGE_TASK
} from '../types/types'

export const addNewTaskAC = (value) => {
    return (dispatch, getState) => {
        const newDate = new Date();

        dispatch({
            type: ADD_NEW_TASK,
            newTask: {
                title: value.newTitle,
                description: value.newDescription,
                isDone: false,
                isImportant: value.newIsImportant,
                date: newDate.toString(),
                id: newDate.toLocaleString()
            }
        })
    }
}

export const isDoneToggle = (id) => {
    return (dispatch, getState) => {
        let tasks = getState().taskListReducer.tasks;
        
        tasks = tasks.map(item=>{
            if (item.id === id)
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

export const changeTask = (payload, id) => {
    console.log(payload, id)
    return (dispatch, getState) => {
        let tasks = getState().taskListReducer.tasks;
        
        tasks = tasks.map(item=>{
            if (item.id === id)
                item = payload
            return item
        })
        console.log(tasks)
        dispatch ({
            type: CHANGE_TASK,
            payload: tasks
        })
    }
}