import {ADD_NEW_TASK} from '../types/types'

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

export const removeSelfAC = () => {
    
}