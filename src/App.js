import React, {useEffect, useRef} from 'react';
import c from "./App.module.css";
import TaskList from "./containers/TaskListContainer";
import Settings from './components/Settings/Settings'
import store from './redux/redux-store/redux-store';
import { Provider, connect, useSelector } from 'react-redux'
import Preloader from "./components/common/Preloader/Preloader";
import {localStorageAPI} from './api/api'
window.store = store

function App(props) {
  
  
  useEffect(() => {
      props.initializeApp()
  }, []);

  const [taskListReducer, settingsReducer] = useSelector(state=>[
                                                            state.taskListReducer.tasks,
                                                            state.settingsReducer
                                                        ])

  useEffect(() => {
    console.log([taskListReducer, settingsReducer])
    localStorageAPI.pushToStorage(taskListReducer, settingsReducer)
  }, [taskListReducer, settingsReducer]);

  return (
      <div className={c.container} style={props.theme.bgColor}>
          <Settings/>
          {!props.initialized
              ? <Preloader/>
              : <TaskList theme={props.theme}/>
          }
      </div>
  );
}


// export default connect(
//   (state)=>{
//       return {
//             //theme: state.settingsReducer.theme,
//             //vizualization: state.settingsReducer.vizualization
//             generalStateTasks: state.taskListReducer,
//             settingsReducer: state.settingsReducer
//         }
//   })(App);

export default App