import {React,Component} from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Input,Button,List } from 'antd';
import 'antd/dist/antd.css';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state={
      inputValue:'',
      list:['学习 java','学习React','学习信息系统项目管理师']
    }
  }
  render(){
    console.log('render');
    return (
      <Fragment>
        {/* <input id="inputFocus" value={this.state.inputValue} onChange={this.handleInput}/>  */}
        <Input placeholder="请输入内容" style={{width:'300px',marginRight:'10px'}}/>
        {/* <button onClick={this.handleButton}>提交</button> */}
        <Button type="primary">提交</Button>
        <List
          style={{marginTop:'10px',width:'300px'}}
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </Fragment>
    )
  }
}

export default TodoList