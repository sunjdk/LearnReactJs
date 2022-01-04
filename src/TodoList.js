import {React,Component} from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Input,Button,List } from 'antd';
import 'antd/dist/antd.css';

import store from "./store";


class TodoList extends Component{
  constructor(props){
    super(props);
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleStoreChange=this.handleStoreChange.bind(this)
    this.handleBtnClick=this.handleBtnClick.bind(this)
    this.state=store.getState()
    // console.log(this.state);
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
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </Fragment>
    )
  }
  
  handleInputChange(e){
    const action={
      type:'change_input_value',
      value:e.target.value
    }
    // console.log(e.target.value);
    store.dispatch(action)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  handleBtnClick(){
    const action={
      type:'add_todo_list',
    }
    store.dispatch(action)
  }
}

export default TodoList