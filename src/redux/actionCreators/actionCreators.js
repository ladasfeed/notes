import {
    SET_INITIALIZED,
    MODIFY_TASKS
} from '../types/types'
import {localStorageAPI} from "../../api/api";

const modifyTasks = (tasks) => ({type: MODIFY_TASKS, payload: tasks });

export const addNewTaskAC = (value) => {
    return (dispatch, getState) => {
        const newDate = new Date();
        let tasks = [
            ...getState().taskListReducer.tasks,
            {
                title: value.newTitle,
                description: value.newDescription,
                isDone: false,
                isImportant: value.newIsImportant,
                date: newDate.toString(),
                id: newDate.toLocaleString()
            }
        ];

        dispatch(modifyTasks(tasks));
        localStorageAPI.pushToStorage(getState())
    }
}

export const isDoneToggle = (id) => {
    return (dispatch, getState) => {
        let tasks = getState().taskListReducer.tasks;

        tasks = tasks.map(item => item.id === id ? {...item, isDone: !item.isDone} : item)

        dispatch(modifyTasks(tasks));
        localStorageAPI.pushToStorage(getState())
    }
}

export const changeTask = (payload, id) => {
    return (dispatch, getState) => {
        let tasks = getState().taskListReducer.tasks;

        tasks = tasks.map(item => item.id === id ? {...item, ...payload} : item)

        dispatch(modifyTasks(tasks));
        localStorageAPI.pushToStorage(getState())
    }
}

export const removeTask = (id) => {
    return (dispatch, getState) => {
        let tasks = getState().taskListReducer.tasks;

        tasks = tasks.filter(item => item.id !== id);

        dispatch(modifyTasks(tasks))
        localStorageAPI.pushToStorage(getState())
    }
}

export const initializeApp = () => dispatch => {
    const userData = localStorageAPI.getUserData();
    
    userData && dispatch({type: MODIFY_TASKS, payload: userData.tasks});
    dispatch({type: SET_INITIALIZED, payload: true});
};