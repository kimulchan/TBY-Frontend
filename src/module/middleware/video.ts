import { AxiosResponse } from "axios";
import { call,put,takeEvery } from "redux-saga/effects";
import { videoType } from "../../types";
import { getVideoListApi } from "../../utils/api/video";
import { getVideoList, GET_VIDEOLIST } from "../action/video";


export function* getVideoListSaga(action:ReturnType<typeof getVideoList.request>){
  try{
    const token = localStorage.getItem("accessToken")
    const response:AxiosResponse<videoType[]> = yield call(getVideoListApi,token as string,action.payload);
    yield put(getVideoList.success(response.data));
  }
  catch(error){
    yield put(getVideoList.failure());
  }
}

export function* videoSaga(){
  yield takeEvery(GET_VIDEOLIST,getVideoListSaga)
}