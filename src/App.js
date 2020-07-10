import React, {useRef} from 'react';
import c from "./App.module.css";
import TaskList from "./containers/TaskListContainer";
import Settings from './components/Settings/Settings'
import store from './redux/redux-store/redux-store';
import { Provider, connect } from 'react-redux'

window.store = store

function App() {
  return (
    <Provider store = {store}>
      <div className={c.container}>
        <Settings />
        <TaskList/>
      </div>
    </Provider>
  );
}


// export default connect(
//   (state)=>{
//     theme: state.settingsReducer.theme,
//     vizualization: state.settingsReducer.vizualization
//   }
// )(App);

export default App