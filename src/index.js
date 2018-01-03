import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import App from './App';

const reducer = combineReducers({
  form: reduxFormReducer
});

// const showResults = values =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log(values)
//       //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
//       resolve()
//     }, 1000)
//   });

const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
