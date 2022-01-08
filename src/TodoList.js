import { connect } from "react-redux";
// import store from "./store";



// 将todulist ui 部分提取出来作为无状态组件

const TodoList=(props)=>{
  const {inputValue,changeInputValue,handleClick,list,handleDelete}=props;
  return(    
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue.bind(this)}/>
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item,index)=>{
            return <li onClick={handleDelete} key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}


// 第一种连接方式：
const mapStateToProps=(state)=>{
  return {
    inputValue:state.inputValue,
    list:state.list
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
    },

    handleClick(){
      console.log(1543);
      const action={
        type:'add_item'
      }
      dispatch(action)
    },

    handleDelete(index){
      const action={
        type:'delete_item',
        index,
      }
      dispatch(action)
    }
  }
}

// 让 TodoList 组件和 store 存储做连接 
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);