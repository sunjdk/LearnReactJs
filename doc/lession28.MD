## reactjs 从基础到入门实战-简书项目

### lession 28  创建redux中的store


Store 的创建

1.安装 redux	yarn add redux

2.src\store\index.js 创建目录， 并创建index.js

```js
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
```

