import {React,Component} from "react";
import { Fragment } from "react/cjs/react.production.min";
import TodoItem from "./TodoItem";

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state={
      inputValue:'',
      list:['学习 java','学习React','学习信息系统项目管理师']
    }
    this.handleInput=this.handleInput.bind(this)
    this.handleButton=this.handleButton.bind(this)
    this.handleDel=this.handleDel.bind(this)
  }

  render(){
    return (
      <Fragment>
        <label htmlFor="inputFocus">请输入内容</label>
        <input id="inputFocus" value={this.state.inputValue} onChange={this.handleInput}/> 
        <button onClick={this.handleButton}>提交</button>
        <ul>
          {
            this.state.list.map((item,index)=>{
              // return <li key={index} onClick={this.handleDel.bind(this,index)} dangerouslySetInnerHTML={{__html:item}}></li>
              return(
                <TodoItem content={item} index={index} del={this.handleDel}/>
              )
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