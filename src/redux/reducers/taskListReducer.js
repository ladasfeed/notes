import {
    REMOVE_TASK,
    MODIFY_TASKS, ADD_TASK, IS_DONE_TOGGLE, CHANGE_TASK, LOAD_SAVED_DATA
} from '../types/types'

const initialState = {
    tasks: [
        {
            title: 'This is example task.',
            date: '01.01.2020',
            description: 'This task hardcoded at initial state. Not from the localStorage.',
            isImportant: false,
            isDone: true,
            id: '123222'
        },
    ],
    newTitle: '',
    newDescription: '',
    newIsDone: false,
    newIsImportant: false
}


const taskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {...state, tasks: [...state.tasks, action.task]}
        }

        case IS_DONE_TOGGLE: {
            return {
                ...state,
                tasks: state.tasks.map(item => item.id === action.id ? {...item, isDone: !item.isDone} : item)
            }
        }

        case CHANGE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map(item => item.id === action.id ? {...item, ...action.payload} : item)
            }
        }

        case REMOVE_TASK: {
            return {...state, tasks: state.tasks.filter(item => item.id !== action.id)}
        }

        case LOAD_SAVED_DATA: {
            return {...state, tasks: action.payload.tasks}
        }

        default:
            return state
    }

}

export default taskListReducer;