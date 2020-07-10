import {
    REMOVE_TASK,
    MODIFY_TASKS
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

        case MODIFY_TASKS: {
            return {
                ...state,
                tasks: action.payload
            }
        }

        default:
            return state
    }

}

export default taskListReducer;