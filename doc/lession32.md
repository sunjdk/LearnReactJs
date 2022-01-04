## reactjs 从基础到入门实战-简书项目

### lession 32 使用actionCreator统一创建action

抽离逻辑的好处

1.提高代码的可维护性

2.便于前端自动化测试工具的测试

src\store\actionCreators.js

```js
import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM } from "./actionTypes";

export const getInputChangeAction=(value)=>({
  type:CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction=()=>({
  type:ADD_TODO_ITEM
})

export const getDeleteItemAction=(index)=>({
  type:DELETE_TODO_ITEM,
  index
})
```