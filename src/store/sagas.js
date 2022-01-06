import axios from 'axios';
import {  takeEvery, put} from 'redux-saga/effects'
import { initListAction } from './actionCreators';
import { GET_INIT_LIST } from './actionTypes';



function* getInitList(action) {
  // console.log(action);
  // 在这里写异步操作
   try {
    const res=yield axios.get('/list.json');
    const action=initListAction(res.data);
    yield put(action)
   } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
      console.log('list.json 网络请求失败');
   }

}


function* mySaga() {//generator 函数  es-6 中的api
  // 捕捉每一个 action 的类型,拦截到了就执行  fetchUser 方法
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;


// from saga doc   https://github.com/redux-saga/redux-saga