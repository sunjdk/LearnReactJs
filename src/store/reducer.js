const defaultState = {
  inputValue:'《拍案惊奇》',
  list:["《三国演义》","《西游记》","《水浒传》","《红楼梦》"]
}


const abc=(state = defaultState, action) => {
  // console.log(state,action);
  if(action.type==='change_input_value'){
    const newState=JSON.parse(JSON.stringify(state))
    newState.inputValue=action.value
    return newState
  }
  if(action.type==='add_todo_list'){
    const newState=JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    // console.log(newState)
    newState.inputValue=''
    return newState
  }
  return state
}
export default abc