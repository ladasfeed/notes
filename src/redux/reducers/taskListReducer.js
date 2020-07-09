import {
    ADD_NEW_TASK,
    CHANGE_NEW_TITLE,
    CHANGE_NEW_DESCR,
    CHANGE_NEW_IS_IMPORTANT,
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
            id: '1234'
        },
        {
            title: 'test2',
            date: '01.01.2020',
            description: 'descr',
            isImportant: false,
            isDone: false,
            id: '1236'
        },
        {
            title: 'test3',
            date: '01.01.2020',
            description: 'descr',
            isImportant: false,
            isDone: false,
            id: '1235'
        },
        {
            title: 'test4',
            date: '01.01.2020',
            description: 'descr',
            isImportant: false,
            isDone: false,
            id: '1232'
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
            console.log(action.payload)
            return {
                ...state,
                tasks: state.tasks.filter((item) => action.payload!=item.id)
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

        case CHANGE_NEW_IS_IMPORTANT: {
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