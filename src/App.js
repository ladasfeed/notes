import React, {useEffect, useRef} from 'react';
import c from "./App.module.css";
import TaskList from "./containers/TaskListContainer";
import Settings from './components/Settings/Settings'
import store from './redux/redux-store/redux-store';
import { Provider, connect } from 'react-redux'

window.store = store

function App(props) {
  console.log(props)

  useEffect(() => {
      props.initializeApp()
      
  }, []);


  return (
      <div className={c.container}>
          {!props.initialized
              ? <div>Loading...</div>
              : <TaskList/>
          }
      </div>
  );
}


// export default connect(
//   (state)=>{
//     theme: state.settingsReducer.theme,
//     vizualization: state.settingsReducer.vizualization
//   }
// )(App);

export default App