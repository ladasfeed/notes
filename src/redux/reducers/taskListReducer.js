import {
    ADD_NEW_TASK,
    CHANGE_NEW_TITLE,
    CHANGE_NEW_DESCR,
    CHANGE_NEW_IS_DONE,
    REMOVE_TASK
} from '../types/types'


const initialState = {
    tasks: [
        {
            title: 'test1',
            date: '01.01.2020',
            description: 'descr',
            isImportant: false,
            isDone: false,
            id: '123'
        },
        {
            title: 'test1',
            date: '01.01.2020',
            description: 'descr',
            isImportant: false,
            isDone: false,
            id: '123'
        },
        {
            title: 'test1',
            date: '01.01.2020',
            description: 'descr',
            isImportant: false,
            isDone: false,
            id: '123'
        },
        {
            title: 'test1',
            date: '01.01.2020',
            description: 'descr',
            isImportant: false,
            isDone: false,
            id: '123'
        }
    ],
   
    newTitle: '',
    newDescription: '',
    newIsDone: false,
    newIsImportant: false

}


const taskListReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_NEW_TASK: {
            return {
                ...state,
                tasks: state.tasks.concat([action.payload])
            }
        }

        case REMOVE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter((item, index) => action.payload!=index)
            }
        }

        case CHANGE_NEW_TITLE: {
            return {
                ...state,
                newTitle: action.payload
            }
        }

        case CHANGE_NEW_DESCR: {
            return {
                ...state,
                newDescription: action.payload
            }
        }

        case CHANGE_NEW_IS_DONE: {
            return {
                ...state,
                newIsDone: action.payload
            }
        }

        default:
            return state
    }

}

export default taskListReducer;