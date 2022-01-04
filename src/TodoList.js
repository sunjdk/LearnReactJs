import {React,Component} from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Input,Button,List } from 'antd';
import 'antd/dist/antd.css';

import store from "./store";
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from "./store/actionCreators"
// import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from "./store/actionTypes"


class TodoList extends Component{
  constructor(props){
    super(props);
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleStoreChange=this.handleStoreChange.bind(this)
    this.handleBtnClick=this.handleBtnClick.bind(this)
    this.state=store.getState()
    // console.log(this.state);
    // 一旦监听到 store 中数据的变化，就执行 this.handleStoreChange
    store.subscribe(this.handleStoreChange)
  }
  render(){
    return (
      <Fragment>
        <Input 
          value={this.state.inputValue}
          placeholder="请输入内容" 
          style={{width:'300px',marginRight:'10px'}}
          onChange={this.handleInputChange}
        />
        <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        <List
          style={{marginTop:'10px',width:'300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => (
            <List.Item onClick={this.handleItemDelete.bind(this,index)}>
              {item}
            </List.Item>
          )}
        />
      </Fragment>
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