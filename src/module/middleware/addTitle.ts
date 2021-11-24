import { call,put,takeLatest } from "redux-saga/effects";
import { postTitleApi } from "../../utils/api/title";
import IsToken from "../../utils/hooks/Token";
import { onAddTitle } from "../action/addTitle";

export function* onAddTitleSaga(action:ReturnType<typeof onAddTitle.request>){
  try{
    const token = IsToken();
    yield call(postTitleApi,token as string,action.payload);
    
    yield put(onAddTitle.success());
    alert("성공하였습니다")
    }
  catch(error){
    alert("실패하였습니다")
    yield put(onAddTitle.failure());
  }
}

export default function* addTitleSaga (){
  yield takeLatest(onAddTitle.request,onAddTitleSaga);
}