import React from "react";
import TaskList from '../components/TasksList/TasksList';
import { connect } from 'react-redux'
import {isDoneToggle, removeTask} from "../redux/actionCreators/actionCreators";
import {localStorageAPI} from "../api/api";

const TaskListContainer = (props) => {
    
    return (
        <>
            <TaskList tasks={props.tasks}
                      removeSelf={props.removeSelf}
                      isDoneToggle={props.isDoneToggle}
                      />
        </> 
    )
};

const mapStateToProps = (state) => {
    return {
        tasks: state.taskListReducer.tasks
        //getVizual
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeSelf: (id) => dispatch(removeTask(id)),
        isDoneToggle: (id) => dispatch(isDoneToggle(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);