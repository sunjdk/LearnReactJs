## reactjs 从基础到入门实战-简书项目

### lession 37 使用Redux-thunk中间件进行ajax请求发送


当我们把异步请求或者复杂逻辑都放到 某一个组件中进行处理的时候，这个组件会显得特别的臃肿，这时候我们就考虑
使用 redux-thunk 中间件中进行管理，该中间件会把异步请求和复杂逻辑放到 action 中进行处理

redux-thunk 中间件的代码仓库地址：https://github.com/reduxjs/redux-thunk
文档地址：https://redux.js.org/usage/writing-logic-thunks


安装命令 yarn add redux-thunk

重启项目

这样就下载好了

使用中间件的步骤：

```js
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(
  reducer,
  applyMiddleware([thunk,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]),
  
);
```


完整的调用 redux-thunk 中间件的代码

```javascript

import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk'

import reducer from './reducer';  //引入笔记本


const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);

export default store;

```


