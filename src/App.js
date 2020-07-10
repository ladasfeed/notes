import React, {useEffect, useRef} from 'react';
import c from "./App.module.css";
import TaskList from "./containers/TaskListContainer";
import store from './redux/redux-store/redux-store';
import { Provider } from 'react-redux'

window.store = store

function App(props) {
  const root = useRef(null);


  console.log(props)

  useEffect(() => {
      props.initializeApp()
  }, []);


  return (
      <div className={c.container}>
          {!props.initialized
              ? <div>Loading...</div>
              : <TaskList ref={root}/>
          }
      </div>
  );
}

export default App;
