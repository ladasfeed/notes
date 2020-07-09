import React from "react";
import TaskComponent from '../components/TasksList/TaskComponent/TaskComponent';
import { connect } from 'react-redux';
import {
    REMOVE_TASK
} from '../redux/types/types'

const TaskListContainer = (props) => {
    

    return (
        <>
            <TaskComponent 
                task={props.task}
                removeSelf={props.removeSelf}
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
        removeSelf: (id) => dispatch({type: REMOVE_TASK, payload: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);