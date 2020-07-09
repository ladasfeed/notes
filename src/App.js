import React from 'react';
import c from "./App.module.css";
import TaskList from "./components/TasksList/TasksList";

function App() {
  return (
    <div className={c.container}>
      <TaskList/>
    </div>
  );
}

export default App;
