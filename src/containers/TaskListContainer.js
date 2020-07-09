import React from "react";
import TaskList from '../components/TasksList/TasksList';
import { connect } from 'react-redux'

const TaskListContainer = (props) => {

    return (
        <>
            <TaskList tasks={props.tasks}/>
        </> 
    )
};

const mapStateToProps = (state) => {
    return {
        tasks: state.taskListReducer.tasks
    }
}

export default connect(mapStateToProps)(TaskListContainer);