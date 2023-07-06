import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import noteReducer from './reducers/noteReducer';
import App from './components/App';

const store = configureStore({
  reducer: noteReducer,
  middleware: [thunk],
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
