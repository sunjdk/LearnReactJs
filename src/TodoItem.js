import React,{Component} from "react";

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

export default TodoItem