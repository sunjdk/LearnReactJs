## reactjs 从基础到入门实战-简书项目

### lession 31 ActionTypes的拆分

src\store\actionTypes.js

```js
export const CHANGE_INPUT_VALUE='change_input_value';
export const ADD_TODO_ITEM='add_todo_item';
export const DELETE_TODO_ITEM='delete_todo_item';
```

抽离actiontype 的目的便于代码报错的调试，字符串变量出错之后难以定位