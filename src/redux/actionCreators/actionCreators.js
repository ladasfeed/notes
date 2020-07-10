import {
    SET_INITIALIZED,
   ADD_TASK, IS_DONE_TOGGLE, CHANGE_TASK, REMOVE_TASK, LOAD_SAVED_DATA
} from '../types/types'
import {localStorageAPI} from "../../api/api";

export const addTask = (task) => ({type: ADD_TASK, task});
export const isDoneToggle = (id) => ({type: IS_DONE_TOGGLE, id});
export const changeTask = (payload, id) => ({type: CHANGE_TASK, payload, id});
export const removeTask = (id) => ({type: REMOVE_TASK, id});

export const addNewTaskAC = (value) => {
    return (dispatch) => {
        const newDate = new Date();

        const task = {
            title: value.newTitle,
            description: value.newDescription,
            isDone: false,
            isImportant: value.newIsImportant,
            date: newDate.toString(),
            id: newDate.toLocaleString()
        };

        dispatch(addTask(task));
    }
};

export const initializeApp = () => dispatch => {
    const userData = localStorageAPI.getUserData();
    
    userData && dispatch({type: LOAD_SAVED_DATA, payload: userData});
    dispatch({type: SET_INITIALIZED, payload: true});
};