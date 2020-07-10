import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import { Field, reduxForm, reset } from 'redux-form';
import { useDispatch } from 'react-redux';
import { changeTask } from '../../../redux/actionCreators/actionCreators'
import c from "./EditComponent.module.css";

let EditComponent = ({editingTask, stopEditing, handleSubmit}) => {

    const [mounted, setMounted] = useState(false);
    
    const closeModal = (event) => {
        console.log(event)
        if (event.target.id == 'editModal')
            stopEditing()
    }
    useEffect(()=>{
        document.querySelector('#editModal').addEventListener('click', closeModal)
        return ()=>{
            document.querySelector('#editModal').removeEventListener('click', closeModal)
        }
    })

    const dispatch = useDispatch()
    const edit = (value) => {
        dispatch(changeTask(value, editingTask.id))
    }
    
    return (
        ReactDOM.createPortal(
            <div id='editModal' className={c.EditModalWrapper}>
                <form onSubmit={handleSubmit(edit)} className={c.EditModal}>
                    <Field value="female" name='title' placeholder={editingTask.title} component='input' type="text"/>
                    <Field value="female" name='description' placeholder={editingTask.title} component='input' type="text"/>
                    <Field value="female" name='isImportant' placeholder={editingTask.title} component='input' type="text"/>
                    <button type='submit'>Submit</button>
                </form>
            </div>,
            document.querySelector('#root')
        )
    )
};

EditComponent = reduxForm({
    form: 'edit'
  })(EditComponent)

export default EditComponent;

