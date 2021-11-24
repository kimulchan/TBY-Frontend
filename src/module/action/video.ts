import { ActionType, createAsyncAction } from "typesafe-actions";
import { videoType } from "../../types";


export const GET_VIDEOLIST= "GET_VIDEOLIST";
export const GET_VIDEOLIST_SUCCESS = "GET_VIDEOLIST_SUCCESS";
export const GET_VIDEOLIST_FAILURE = "GET_VIDEOLIST_FAILURE";

export const getVideoList = createAsyncAction(GET_VIDEOLIST,GET_VIDEOLIST_SUCCESS,GET_VIDEOLIST_FAILURE)<number,videoType[],undefined>();

const actions = {
  getVideoList
}

export type videoActions = ActionType<typeof actions>;