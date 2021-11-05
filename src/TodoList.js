import {React,Component} from "react";
import { Fragment } from "react/cjs/react.production.min";
import TodoItem from "./TodoItem";
import axios from 'axios'
import App from "./App";


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
  componentWillMount(){
    console.log('页面挂载时componentWillMount');
  }
  componentDidMount(){
    // console.log('页面挂载完成componentDidMount');
    axios.get('/api/v1/learn/todolist').then((res)=>{
      console.log(res)
      const {data} = res.data
      this.setState(()=>({
        list:[...data]
      }))
    }).catch((res)=>{
      console.log(res);
    })
  }
  render(){
    console.log('render');
    return (
      <Fragment>
        <label htmlFor="inputFocus">请输入内容</label>
        <input id="inputFocus" value={this.state.inputValue} onChange={this.handleInput}/> 
        <button onClick={this.handleButton}>提交</button>
        <ul>
          {
            this.getItem()
          }
        </ul>
        <App/>
      </Fragment>
    )
  }
  // 组建被更新之前会被自动执行
  shouldComponentUpdate(){
    console.log('shouldComponentUpdata');
    return true
  }
  // 组建被更新之前，它会自动执行，但是他在 shouldComponentUpdate 之后
  componentWillUpdate(){
    console.log('组建被更新执行之前componentWillUpdate')
  }
  // 组建更新完成之后，会被执行
  componentDidUpdate(){
    console.log('组建已经更新完成了componentDidUpdate');
  }
  getItem(){
    return this.state.list.map((item,index)=>{
      // return <li key={index} onClick={this.handleDel.bind(this,index)} dangerouslySetInnerHTML={{__html:item}}></li>
      return(
        <TodoItem key={index} content={item} index={index} del={this.handleDel}/>
      )
    })
  }
  handleInput(e){
    // console.log(this)
    // this.setState({
    //   inputValue:e.target.value
    // })
    // this.setState(()=>{
    //   return{
    //     inputValue:e.target.value
    //   }
    // })
    const value=e.target.value
    this.setState(()=>({inputValue:value}))
  }
  handleButton(){
    // this.setState({
    //   list:[...this.state.list,this.state.inputValue],
    //   inputValue:''
    // })
    this.setState((prevState)=>({
      list:[...prevState.list,prevState.inputValue],
      inputValue:''
    }))
  }
  handleDel(index){
    // console.log(index);
    // const list=[...this.state.list]
    // list.splice(index,1)

    // this.setState({
    //   list:list
    // })
    // this.setState(()=>({
    //   list
    // }))


    this.setState((prevState)=>{
      const list=[...prevState.list]
      list.splice(index,1)
      return {list}
    })
  }
}

export default TodoList