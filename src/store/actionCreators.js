import axios from "axios";
import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_LIST_ACTION } from "./actionTypes";

export const getInputChangeAction=(value)=>({
  type:CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction=()=>({
  type:ADD_TODO_ITEM
})

export const getDeleteItemAction=(index)=>({
  type:DELETE_TODO_ITEM,
  index
})

export const initListAction=(data)=>({
  type:INIT_LIST_ACTION,
  data
})

export const getTodoList=()=>{
  return (dispatch)=>{
    axios.get('/List.json').then((res)=>{
      // console.log(res);
      const data=res.data
      console.log(data);
      const action=initListAction(data)
      // console.log(action)
      dispatch(action)
    }).catch(function(e1){
      console.log(e1);
    })
  }
}