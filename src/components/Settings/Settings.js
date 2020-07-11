import React from "react";
import c from "./Settings.module.css";
import { useDispatch } from 'react-redux'
const Settings = () => {
    const dispatch = useDispatch();

    function changeTheme() {
      dispatch({type: 'CHANGE_THEME'})
    }

    function changeView() {
      dispatch({type: 'CHANGE_VIEW'})
    }
   
    return (
        <div className={c.SettingsWrapper}>
          <div onClick={changeTheme}>Change Theme</div>
          <div onClick={changeView}>Change Vizualization</div>
        </div>
    )
};

export default Settings;