import { Component } from "react";
import { connect } from "react-redux";
// import store from "./store";

class TodoList extends Component{
  // constructor(props){
  //   super(props);
  //   this.state=store.getState()
  // }
  render(){
    return(
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInputValue.bind(this)}/>
          <button onClick={this.handleClick.bind(this)}>提交</button>
        </div>
        <ul>
          <li>Dell</li>
        </ul>
      </div>
    )
  }

  handleInputChange(e){
    console.log(e.target.value);
  }
  handleClick(e){
    console.log(e);
  }
}
// 第一种连接方式：
const mapStateToProps=(state)=>{
  return {
    inputValue:state.inputValue
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    changeInputValue(e){
      // console.log(e.target.value);
      const action={
        type:'change_input_value',
        value:e.target.value
      }
      dispatch(action) 
    }
  }
}

// 让 TodoList 组件和 store 存储做连接 
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);