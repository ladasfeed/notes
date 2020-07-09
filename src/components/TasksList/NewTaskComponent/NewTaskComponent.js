import React from "react";
import c from "./NewTaskComponent.module.css";
import { Field, reduxForm, reset } from 'redux-form';
import { useDispatch } from 'react-redux'
import { addNewTaskAC } from '../../../redux/actionCreators/actionCreators'




let NewTaskComponent = ({handleSubmit}) => {

    const dispatch = useDispatch() 

    const addNew = (value) => {
        dispatch(addNewTaskAC(value))
        console.log(value)
        dispatch(reset('newTask'))
    }

    return (
        <div className={c.container}>
            <form onSubmit={handleSubmit(addNew)}>
                <div className={c.title}>
                    <Field  placeholder="newTitle" name="newTitle" component="input" type="text" />
                </div>
                
                <div className={c.description}>
                    <Field placeholder="newDescription" name="newDescription" component="input" type="text" />
                </div>

                <div className={c.footer}>
                    <Field placeholder="newIsImportant" name="newIsImportant" component="input" type="checkbox" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

NewTaskComponent = reduxForm({
    form: 'newTask'
  })(NewTaskComponent)

export default NewTaskComponent;