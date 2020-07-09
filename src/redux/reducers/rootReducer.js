import { combineReducers } from 'redux';
import taskListReducer from './taskListReducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    taskListReducer,
    form: formReducer
})