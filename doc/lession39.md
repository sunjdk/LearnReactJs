## reactjs 从基础到入门实战-简书项目

### lession 39 Redux-saga中间件的使用

做异步代码拆分的中间件  可以用来替换  redux-thunk


redux-saga 仓库地址：https://github.com/redux-saga/redux-saga


1.配置saga步骤

在 src\store\index.js 中做以下几点配置

1.引入 createSagaMiddleWare 从 redux-saga 中
2.调用 createSagaMiddleware() 方法创建 sagaMiddleware 中间件
3.定义 用 composeEnhancers 方法 调用 applyMiddleware(sagaMiddleware) 定义 enhancer 
4.创建store 并传入中间件 createStore(reducer,enhancer)
5.sagaMiddleware 中间件 调用  run 方法 使用 saga  sagaMiddleware.run(todoSagas)

```javascript
import { createStore,compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer';  //引入笔记本
import mySaga from './sagas';
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);
sagaMiddleware.run(mySaga)
export default store;
```

定义 saga 文件  https://github.com/redux-saga/redux-saga
src\store\sagas.js


```javascript
import axios from 'axios';
import {  takeEvery, put} from 'redux-saga/effects'
import { initListAction } from './actionCreators';
import { GET_INIT_LIST } from './actionTypes';
// generator 函数
function* getInitList(action) {
   try {
    const res=yield axios.get('/list.json');
    const action=initListAction(res.data);
    yield put(action)
   } catch (e) {
   }
}
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}
export default mySaga;
```