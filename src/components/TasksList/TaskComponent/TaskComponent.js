import React from "react";
import c from "./TaskComponent.module.css";

const TaskComponent = ({title, description}) => {

    return (
        <div className={c.container}>
            <div className={c.title}>Title text</div>
            <div className={c.description}>
                <p>This is the description. Lorem ipsum huipsum. Yo yo yo
                    This is the description. </p>
            </div>
            <div className={c.footer}>
                <label><input type="checkbox"/> Done</label>
                <button>Edit</button>
                <button>Remove</button>
            </div>
        </div>
    )
};

export default TaskComponent;