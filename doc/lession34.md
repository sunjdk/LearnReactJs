## reactjs 从基础到入门实战-简书项目

### lession 34 UI 组件与容器组件的拆分

UI 组件-傻瓜组件

容器组件-智能组件



拆分步骤，把设计到ui 界面的部分代码提取出去，放到新定义的 TodoListUI.js 组件中

在容器组件中调用这个UI 组件，UI 组件中的方法和变量要用父子组件传值的方法，把他们从容器组件传值到 UI 组件中

主要代码 src\TodoListUI.js

```js
import React,{Component} from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Input,Button,List } from 'antd';

class TodoListUI extends Component{
  render(){
    return(
      <Fragment>
        <Input 
          value={this.props.inputValue}
          placeholder="请输入内容" 
          style={{width:'300px',marginRight:'10px'}}
          onChange={this.props.handleInputChange}
        />
        <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
        <List
          style={{marginTop:'10px',width:'300px'}}
          bordered
          dataSource={this.props.list}
          renderItem={(item,index) => (
            <List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>
              {item}
            </List.Item>
          )}
        />
      </Fragment>
    )
  }
}
export default TodoListUI
```
src\TodoList.js
```js
import {React,Component} from "react";

import 'antd/dist/antd.css';

import store from "./store";
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from "./store/actionCreators"
// import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from "./store/actionTypes"
import TodoListUI from './TodoListUI';

class TodoList extends Component{
  constructor(props){
    super(props)
    this.state=store.getState()
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleStoreChange=this.handleStoreChange.bind(this)
    this.handleBtnClick=this.handleBtnClick.bind(this)

    this.handleItemDelete=this.handleItemDelete.bind(this)
    // console.log(this.state);
    // 一旦监听到 store 中数据的变化，就执行 this.handleStoreChange
    store.subscribe(this.handleStoreChange)
  }
  render(){
    return (
      <TodoListUI 
        inputValue={this.state.inputValue} 
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }
  
  handleInputChange(e){
    // const action={
    //   type:CHANGE_INPUT_VALUE,
    //   value:e.target.value
    // }
    // console.log(e.target.value);
    const action= getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  handleBtnClick(){
    // const action={
    //   type:ADD_TODO_ITEM
    // }
    const action=getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete(index){
    // alert(index)
    // const action={
    //   type:DELETE_TODO_ITEM,
    //   index
    // }
    const action=getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList
```