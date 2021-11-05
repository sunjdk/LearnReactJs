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
}

TodoItem.propTypes ={
  content:PropTypes.string,
  del:PropTypes.func,
  index:PropTypes.number
}

TodoItem.defaultProps={
  test:'hello world'
}
export default TodoItem