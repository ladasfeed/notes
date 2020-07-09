import React from 'react';
import c from "./App.module.css";
import TaskList from "./containers/TaskListContainer";
import store from './redux/redux-store/redux-store';
import { Provider } from 'react-redux'

window.store = store

function App() {
  return (
    <Provider store = {store}>
      <div className={c.container}>
        <TaskList/>
      </div>
    </Provider>
  );
}

export default App;
