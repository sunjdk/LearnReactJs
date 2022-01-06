import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoList from './TodoList';
import store from './store';
const App=(
  // provider 是把 redux 的 store 存储挂载到被它包裹的所有组件上
  <Provider store={store}>
    <TodoList/>
  </Provider>
)
ReactDOM.render(
  App,
  document.getElementById('root')
);
