import { ActionType, createAction, createAsyncAction } from "typesafe-actions";
import { addVideoPaylode, setAddVideoList } from "../../types";


export const ON_ADD_VIDEO = "addVideo/ON_ADD_VIDEO";
export const ON_ADD_VIDEO_SUCCESS = "addVideo/ON_ADD_VIDEO_SUCCESS";
export const ON_ADD_VIDEO_FAILURE = "addVideo/ON_ADD_VIDEO_FAILURE";

export const VIDEO_INFO_LIST = "addVideo/VIDEO_INFO_LIST";
export const ADD_VIDEO_BOX = "addVideo/ADD_VIDEO_BOX"
export const TITLE_INFO = "addVideo/TITLE_INFO";

export const setVideoInfoList=createAction(VIDEO_INFO_LIST)<setAddVideoList>()
export const setTitleInfo = createAction(TITLE_INFO)<number|undefined>()
export const addVideoInfoBox = createAction(ADD_VIDEO_BOX)()
export const onAddVideo=createAsyncAction(ON_ADD_VIDEO,ON_ADD_VIDEO_SUCCESS,ON_ADD_VIDEO_FAILURE)<addVideoPaylode[],undefined,undefined>()

export const actions = {onAddVideo,addVideoInfoBox,setVideoInfoList,setTitleInfo}

export type addVideoActions= ActionType<typeof actions>