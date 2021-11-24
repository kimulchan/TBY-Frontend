import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router";
import { call,put,takeEvery } from "redux-saga/effects";
import { titleType } from "../../types";
import { allTitleApi, getTitleWithCategoryApi, getTitleWithSubjectApi } from "../../utils/api/title";
import IsToken from "../../utils/hooks/Token";
import { getAllTitle, getTitleWithCategory, getTitleWithSubject, GET_ALL_TITLE, GET_TITLE_WITH_CATEGORY, GET_TITLE_WITH_SUBJECT } from "../action/title";

export function* titleWithCategorySaga(action : ReturnType<typeof getTitleWithCategory.request>){
  try{
    const token = IsToken();
    const response:AxiosResponse<titleType[]> = yield call(getTitleWithCategoryApi,token as string,action.payload);
    yield put(getTitleWithCategory.success(response.data));
  }
  catch(error:any){
    console.log(error);
    if(error.response?.status){
      if(error.response.status==="401"){
        alert("로그인 후 진행해 주세요");
        localStorage.removeItem("accessToken");
         
      }
    }else{
      alert("관리자에게 문의하세요");
    }
    yield put(getTitleWithCategory.failure());
  }
}

export function* titleWithSubjectSaga(action: ReturnType<typeof getTitleWithSubject.request>){
  try{
    const token = IsToken();
    const response:AxiosResponse<titleType[]> = yield call(getTitleWithSubjectApi,token as string,action.payload);
    yield put(getTitleWithSubject.success(response.data));
  }
  catch(error:any){
    if(error.response?.status){
      if(error.response.status==="401"){
        alert("로그인 후 진행해 주세요");
        localStorage.removeItem("accessToken");
      }
    }
    else{
      alert("관리자에게 문의하세요");
    }yield put(getTitleWithSubject.failure());
  }
}
export function* titleAllSaga(){
  try{
    const token = IsToken();
    const response:AxiosResponse<titleType[]> =yield call (allTitleApi,token as string)
    yield put(getAllTitle.success(response.data));
  }
  catch(error){
    yield put(getAllTitle.failure());
  }
}

export default function* titleSaga(){
  yield takeEvery(GET_TITLE_WITH_CATEGORY,titleWithCategorySaga);
  yield takeEvery(GET_TITLE_WITH_SUBJECT,titleWithSubjectSaga);
  yield takeEvery(GET_ALL_TITLE,titleAllSaga);
}