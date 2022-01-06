import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Input,Button,List } from 'antd';


const TodoListUI=(props)=>{
  return(
    <Fragment>
        <Input 
          value={props.inputValue}
          placeholder="请输入内容" 
          style={{width:'300px',marginRight:'10px'}}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
        <List
          style={{marginTop:'10px',width:'300px'}}
          bordered
          dataSource={props.list}
          renderItem={(item,index) => (
            <List.Item onClick={()=>{props.handleItemDelete(index)}}>
              {item}
            </List.Item>
          )}
        />
      </Fragment>
  )

}





// class TodoListUI extends Component{
//   render(){
//     return(
//       <Fragment>
//         <Input 
//           value={this.props.inputValue}
//           placeholder="请输入内容" 
//           style={{width:'300px',marginRight:'10px'}}
//           onChange={this.props.handleInputChange}
//         />
//         <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//         <List
//           style={{marginTop:'10px',width:'300px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item,index) => (
//             <List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </Fragment>
//     )
//   }
// }
export default TodoListUI