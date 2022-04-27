import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import app from './lib/store';

const store = createStore(app)
store.dispatch({ type: 'CREATE_ITEM', payload: { title: 'first item' } });

ReactDOM.render(
 <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


registerServiceWorker();
