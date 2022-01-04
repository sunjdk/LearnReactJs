import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from "./actionTypes"

const defaultState = {
  inputValue:'《拍案惊奇》',
  list:["《三国演义》","《西游记》","《水浒传》","《红楼梦》"]
}

// reducer 可以接收state,但是绝不能修改 state
const abc=(state = defaultState, action) => {
  // console.log(state,action);
  if(action.type===CHANGE_INPUT_VALUE){
    const newState=JSON.parse(JSON.stringify(state))
    // 浅拷贝并修改state 中的数据
    newState.inputValue=action.value
    return newState
  }
  if(action.type===ADD_TODO_ITEM){
    const newState=JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    // console.log(newState)
    newState.inputValue=''
    return newState
  }
  if(action.type===DELETE_TODO_ITEM){
    const newState=JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }
  return state
}
export default abc