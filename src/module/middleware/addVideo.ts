import { call, put, takeEvery } from "@redux-saga/core/effects";
import { addVideoApi } from "../../utils/api/video";
import IsToken from "../../utils/hooks/Token";
import { onAddVideo, ON_ADD_VIDEO } from "../action/addVideo";


export function* onAddVideoSaga (action:ReturnType<typeof onAddVideo.request>){
  try{
    const token = IsToken();
    yield call(addVideoApi,token as string,action.payload);
    yield put(onAddVideo.success())
    alert("성공하였습니다");
  }
  catch(error){
    alert("실패하였습니다");
    yield put(onAddVideo.failure())
  }
}

export default function* addVideoSaga (){
  yield takeEvery(ON_ADD_VIDEO,onAddVideoSaga);
}



