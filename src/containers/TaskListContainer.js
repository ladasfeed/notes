import React from "react";
import TaskList from '../components/TasksList/TasksList';
import { connect } from 'react-redux'
import {REMOVE_TASK} from "../redux/types/types";
import {isDoneToggle} from "../redux/actionCreators/actionCreators";

const TaskListContainer = (props) => {
    
    return (
        <>
            <TaskList tasks={props.tasks}
                      removeSelf={props.removeSelf}
                      isDoneToggle={props.isDoneToggle}/>
        </> 
    )
};

const mapStateToProps = (state) => {
    return {
        tasks: state.taskListReducer.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeSelf: (id) => dispatch({type: REMOVE_TASK, payload: id}),
        isDoneToggle: (id) => dispatch(isDoneToggle(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);