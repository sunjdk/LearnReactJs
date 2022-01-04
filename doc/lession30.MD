## reactjs 从基础到入门实战-简书项目

### lession 30  使用Redux完成TodoList删除功能

关键代码

Todolist.js

```js
<List.Item onClick={this.handleItemDelete.bind(this,index)}>
    {item}
</List.Item>

handleItemDelete(index){
    // alert(index)
    const action={
      type:'delete_todo_item',
      index
    }
    store.dispatch(action)
  }
```

reducer.js


```js
if(action.type==='delete_todo_item'){

  const newState=JSON.parse(JSON.stringify(state))

  newState.list.splice(action.index,1)

  return newState

 }
```

