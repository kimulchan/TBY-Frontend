import { call, put ,takeEvery } from "redux-saga/effects";
import { onAdminLoginApi, onJoinApi, onLoginApi } from "../../utils/api/auth";
import { onAdminLogin, onJoin, onLogin, ON_ADMIN_LOGIN, ON_JOIN, ON_LOGIN, resetInput } from "../action/auth";
import {setSigninModal,setSignupModal} from "../action/modal";

export function* onLoginSaga(action:ReturnType<typeof onLogin.request>){
  try{
    yield put(resetInput());
    yield call(onLoginApi,action.payload);
    yield put(onLogin.success());
    alert("로그인 성공");
    yield put(setSigninModal());
  }
  catch(error){
      alert("로그인에 실패하였습니다")
      yield put(onLogin.failure());
  }
}

export function* onJoinSaga(action:ReturnType<typeof onJoin.request>){
  try{
    yield call(onJoinApi,action.payload);
    
    yield put(onJoin.success());
    alert("회원가입 성공");
    yield put(setSignupModal());
    yield put(setSigninModal());

  }
  catch(error){
    alert("회원가입에 실패하였습니다")
    yield put(onJoin.failure());
  }
}

export function* onAdminLoginSaga(action:ReturnType<typeof onAdminLogin.request>){
  try{
    yield call(onAdminLoginApi,action.payload);
    yield put(onAdminLogin.success());

  }
  catch(error){
    alert("로그인에 실패하였습니다");
    yield put(onAdminLogin.failure());
  }
}

export default function* authSaga(){
  yield takeEvery(ON_LOGIN,onLoginSaga);
  yield takeEvery(ON_JOIN,onJoinSaga); 
  yield takeEvery(ON_ADMIN_LOGIN,onAdminLoginSaga);   
}

