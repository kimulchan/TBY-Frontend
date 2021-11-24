import {all} from "redux-saga/effects";
import addTitleSaga from "./addTitle";
import addVideoSaga from "./addVideo";
import authSaga from "./auth";
import titleSaga from "./title";
import { videoSaga } from "./video";

export default function* rootSaga(){
  yield all([
    authSaga(),
    titleSaga(),
    videoSaga(),
    addTitleSaga(),
    addVideoSaga()
  ]);
}