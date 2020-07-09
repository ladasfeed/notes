import React from "react";
// import TaskComponent from '../components/TaskComponent/TaskComponent';
import { connect } from 'react-redux';
import {
    CHANGE_NEW_TITLE,
    CHANGE_NEW_DESCR,
    CHANGE_NEW_IS_IMPORTANT,
} from '../types/types'

const TaskListContainer = (props) => {

    return (
        <>
            {/* <TaskComponent /> */}
        </> 
    )
};

const mapStateToProps = (state) => {
    return {
       
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeNewTitle: (newTitle) => dispatch({type: CHANGE_NEW_TITLE, payload: newTitle}),
        onChangeNewDescription: (newDescription) => dispatch({type: CHANGE_NEW_DESCR, payload: newDescription}),
        onChangeNewDone: (newIsImportant) => dispatch({type: CHANGE_NEW_IS_IMPORTANT, newIsImportant})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);