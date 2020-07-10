import {
    REMOVE_TASK,
    MODIFY_TASKS
} from '../types/types'


const initialState = {

    tasks: {},
    // tasks: [
    //     {
    //         title: 'Title test',
    //         date: '01.01.2020',
    //         description: 'Lorem ipsum. Yo Yo Yo. Write here your description.',
    //         isImportant: false,
    //         isDone: true,
    //         id: '123'
    //     },
    //     {
    //         title: 'This is title test too',
    //         date: '01.01.2020',
    //         description: 'Lorem ipsum. Yo Yo Yo. Write here your description.',
    //         isImportant: false,
    //         isDone: false,
    //         id: '1234'
    //     },
    //     {
    //         title: 'test2',
    //         date: '01.01.2020',
    //         description: 'Description. This is description. Description. Description. This is description.',
    //         isImportant: true,
    //         isDone: false,
    //         id: '1236'
    //     },
    //     {
    //         title: 'test4',
    //         date: '01.01.2020',
    //         description: 'descr',
    //         isImportant: false,
    //         isDone: false,
    //         id: '1232'
    //     },
    //     {
    //         title: 'test2',
    //         date: '01.01.2020',
    //         description: 'Description. This is description. Description. Description. This is description.',
    //         isImportant: true,
    //         isDone: false,
    //         id: '1236'
    //     },
    // ],
   
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

        case REMOVE_TASK: {
            console.log(action.payload)
            return {
                ...state,
                tasks: state.tasks.filter((item) => action.payload!=item.id)
            }
        }

        default:
            return state
    }

}

export default taskListReducer;