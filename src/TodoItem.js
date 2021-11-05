import React,{Component} from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props){
    super(props)
    this.delItem=this.delItem.bind(this)
  }
  render(){
    const {content}=this.props
    return(
      <div onClick={this.delItem}>{content}</div>
    )
  }
  delItem(){
    //alert(this.props.index)
    // this.props.del(this.props.index)
    const {del,index}=this.props
    del(index)
  }
  //一个组件从父组件接收参数
  // 当父组件的 render 函数被重新执行了，子组件的componWillReceiveProps 就会执行 componentWillReceiveProps
  // 如果这个组件第一次存在于父组件中，不会执行
  // 如果这个组件之前已经存在与父组件中，才会执行
  componentWillReceiveProps(){
    console.log('一个组件从父组件接收参数，当父组件的 render 函数被重新执行了，子组件的componWillReceiveProps 就会执行 componentWillReceiveProps')
  }
  componentWillUnmount(){
    console.log('当一个组件将要从页面中被剔除的时候，就会执行 componentWillUnmout 函数');
  }
}

TodoItem.propTypes ={
  content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
  del:PropTypes.func,
  index:PropTypes.number
}

TodoItem.defaultProps={
  test:'hello world'
}
export default TodoItem