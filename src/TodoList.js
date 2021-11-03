import {React,Component} from "react";
import { Fragment } from "react/cjs/react.production.min";

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state={
      inputValue:'',
      list:['学习 java','学习React','学习信息系统项目管理师']
    }
  }

  render(){
    return (
      <Fragment>
        <input value={this.state.inputValue} onChange={this.handleInput.bind(this)}/> 
        <button onClick={this.handleButton.bind(this)}>提交</button>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return <li key={index} onClick={this.handleDel.bind(this,index)}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }
  handleInput(e){
    // console.log(this)
    this.setState({
      inputValue:e.target.value
    })
  }
  handleButton(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }
  handleDel(index){
    console.log(index);
    const list=[...this.state.list]
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
}

export default TodoList