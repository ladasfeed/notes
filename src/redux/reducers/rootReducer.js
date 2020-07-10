import { combineReducers } from 'redux';
import taskListReducer from './taskListReducer';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

export default combineReducers({
    taskListReducer, appReducer,
    form: formReducer
})