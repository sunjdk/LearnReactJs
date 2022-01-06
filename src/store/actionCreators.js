import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, GET_INIT_LIST, INIT_LIST_ACTION } from "./actionTypes";

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

export const getInitListAction=(data)=>({
  type:GET_INIT_LIST,
  data
})