import { combineReducers } from 'redux';
import taskListReducer from './taskListReducer';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";
import settingsReducer from "./settingsReducer";

export default combineReducers({
    taskListReducer, appReducer, settingsReducer,
    form: formReducer
})