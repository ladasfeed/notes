import React from "react";
import TaskComponent from '../components/TasksList/TaskComponent/TaskComponent';
import { connect } from 'react-redux';
import {
    REMOVE_TASK, IS_DONE_TOGGLE
} from '../redux/types/types'
import {isDoneToggle} from '../redux/actionCreators/actionCreators'

const TaskListContainer = (props) => {
    return (
        <>
            <TaskComponent 
                task={props.task}
                removeSelf={props.removeSelf}
                isDoneToggle={props.isDoneToggle}
            />
        </> 
    )
};

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeSelf: (id) => dispatch({type: REMOVE_TASK, payload: id}),
        isDoneToggle: (id) => dispatch(isDoneToggle(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);