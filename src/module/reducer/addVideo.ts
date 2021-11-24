import { action, createReducer } from "typesafe-actions";
import { videoAddInitType } from "../../types";
import { addVideoActions, ADD_VIDEO_BOX, ON_ADD_VIDEO, ON_ADD_VIDEO_FAILURE, ON_ADD_VIDEO_SUCCESS, TITLE_INFO, VIDEO_INFO_LIST } from "../action/addVideo";


const initState:videoAddInitType = {
  videoAddList:[{
    videoName:"",
    videoUrl:""
  }],
  titleId:undefined,
  lodding:false
}
const addVideoReducer = createReducer<videoAddInitType,addVideoActions>(initState,{
  [VIDEO_INFO_LIST]:(state,action)=>({...state,
    videoAddList:state.videoAddList.map((content,i)=>i===action.payload.changeInfoNum?{...content,[action.payload.changeInfoName]:action.payload.value}:content)
  }),
  [TITLE_INFO]:(state,paylode)=>({...state,titleId:paylode.payload}),
  [ADD_VIDEO_BOX]:(state)=>({...state,videoAddList:[...state.videoAddList,{videoName:"",videoUrl:""}]}),

  [ON_ADD_VIDEO]:(state)=>({...state,lodding:true}),
  [ON_ADD_VIDEO_SUCCESS]:(state)=>({...state,lodding:false}),
  [ON_ADD_VIDEO_FAILURE]:(state)=>({...state,lodding:false})
})

export default addVideoReducer
