import React from "react";
import c from "./NewTaskComponent.module.css";
import { Field, reduxForm, reset } from 'redux-form';
import { useDispatch } from 'react-redux'
import { addNewTaskAC } from '../../../redux/actionCreators/actionCreators'



let NewTaskComponent = ({handleSubmit, bgColor, view}) => {

    const dispatch = useDispatch() 

    const addNew = (value) => {
        dispatch(addNewTaskAC(value))
        console.log(value)
        dispatch(reset('newTask'))
    }

    return (
        <div className={c.container} style={view==='row' ? {width: '100%', ...bgColor} : {width: '250px', ...bgColor}}>
            <form onSubmit={handleSubmit(addNew)}>
                <div className={c.title}>
                    <Field className={c.titleInput}  placeholder="newTitle" name="newTitle" component="input" type="text" />
                </div>
                
                <div className={c.description}>
                    <Field className={c.descriptionInput} placeholder="newDescription" name="newDescription" component="textarea" type="text" />
                </div>

                <div className={c.isNew}>
                    Is Your Task Important
                    <Field className={c.isNewInput} placeholder="newIsImportant" name="newIsImportant" component="input" type="checkbox" />
                </div>
                <button type="submit">Add New Task</button>
            </form>
        </div>
    )
};

NewTaskComponent = reduxForm({
    form: 'newTask'
  })(NewTaskComponent)

export default NewTaskComponent;