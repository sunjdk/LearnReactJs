## reactjs 从基础到入门实战-简书项目

### lession 29  创建redux中的store


Store Action和Reducer的编写

```js
const abc=(state = defaultState, action) => {
  // console.log(state,action);
  if(action.type==='change_input_value'){
    const newState=JSON.parse(JSON.stringify(state))
    newState.inputValue=action.value
    return newState
  }


  return abc;
```



TodoList.js  派发事件函数

store.subscribe(this.handleStoreChange)



```js
handleBtnClick(){
    const action={
      type:'add_todo_list',
    }
    store.dispatch(action)
  }
```



reducer.js	处理事件

```js
if(action.type==='add_todo_list'){
    const newState=JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    // console.log(newState)
    newState.inputValue=''
    return newState
  }
```



整个redux 使用的流程

react 要修改store 中 state 中的数据，首先要写一个 action 方法，action 中的方法用通过dispatch 方法派发给store,store 会把之前的数据和action转发给reducer,reducer 是一个函数，他接收到了state 和 action 之后，做一些处理之后会返回一个新的state 给到 store ,store 用新的state 替换掉之前 store 里面 state 的数据，store 中的数据发生改变的时候react 会感知到 store  里面数据发生改变，这个时候它从store 里面重新取数据，更新组件的内容，页面就会重新被渲染

