import {React,Component} from "react";

import 'antd/dist/antd.css';

import store from "./store";
import {getInputChangeAction,getAddItemAction,getDeleteItemAction ,getTodoList} from "./store/actionCreators"
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
  // 生命周期函数 组件挂载完成之后执行
  componentDidMount(){
    const action=getTodoList();
    // console.log(action);
    store.dispatch(action)
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