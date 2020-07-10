import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppContainer from "./containers/AppContainer";
import {Provider} from "react-redux";
import store from "./redux/redux-store/redux-store";
import {localStorageAPI} from "./api/api";

// const testObj =  {
//     tasks: [
//         {
//             title: 'Title test',
//             date: '01.01.2020',
//             description: 'Lorem ipsum. Yo Yo Yo. Write here your description.',
//             isImportant: false,
//             isDone: true,
//             id: '123'
//         },
//         {
//             title: 'This is title test too',
//             date: '01.01.2020',
//             description: 'Lorem ipsum. Yo Yo Yo. Write here your description.',
//             isImportant: false,
//             isDone: false,
//             id: '1234'
//         },
//     ]
// };


store.subscribe(() => {
    if (store.getState().appReducer.initialized){
         localStorageAPI.pushToStorage(store.getState())
    }
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
