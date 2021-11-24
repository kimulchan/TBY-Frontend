import { createReducer } from "typesafe-actions";
import { videoInitType } from "../../types";
import { GET_VIDEOLIST, GET_VIDEOLIST_FAILURE, GET_VIDEOLIST_SUCCESS, videoActions } from "../action/video";


const initState:videoInitType = {
  videos:[],
  lodding:false
}

const videoReducer = createReducer<videoInitType,videoActions>(initState,{
  [GET_VIDEOLIST]:(state)=>({...state,lodding:true}),
  [GET_VIDEOLIST_SUCCESS]:(state,action)=>({...state,videos:action.payload,lodding:false}),
  [GET_VIDEOLIST_FAILURE]:(state)=>({...state,lodding:false})
})

export default videoReducer;