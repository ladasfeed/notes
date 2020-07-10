import {
    SET_INITIALIZED,
    MODIFY_TASKS
} from '../types/types'
import {localStorageAPI} from "../../api/api";

export const addNewTaskAC = (value) => {
    return (dispatch, getState) => {
        const newDate = new Date();
        let tasks = getState().taskListReducer.tasks;
        
        tasks.push({
            title: value.newTitle,
            description: value.newDescription,
            isDone: false,
            isImportant: value.newIsImportant,
            date: newDate.toString(),
            id: newDate.toLocaleString()
        })

        tasks = Object.assign([], tasks)
       
        dispatch({
            type: MODIFY_TASKS,
            payload: tasks 
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
            type: MODIFY_TASKS,
            payload: tasks
        })
    }
}

export const changeTask = (payload, id) => {
    console.log(payload, id)
    return (dispatch, getState) => {
        let tasks = getState().taskListReducer.tasks;
        
        tasks = tasks.map(item=>{
            if (item.id === id) {
                item.description = payload.description;
                item.isImportant = payload.isImportant;
                item.title = payload.title;
            }
                
            return item
        })
        
        dispatch ({
            type: MODIFY_TASKS,
            payload: tasks
        })
    }
}   

export const initializeApp = () => dispatch => {
    const userData = localStorageAPI.getUserData();
    
    userData && dispatch({type: MODIFY_TASKS, payload: userData.tasks});
    dispatch({type: SET_INITIALIZED, payload: true});
};