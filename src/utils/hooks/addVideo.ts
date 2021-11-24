import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addVideoInfoBox, onAddVideo, setTitleInfo, setVideoInfoList } from "../../module/action/addVideo";
import { reducerType } from "../../module/reducer"
import { setAddVideoList } from "../../types";


const useAddVideo = ()=>{
  const state = useSelector((state:reducerType)=>state.addVideo);
  const dispatch = useDispatch();
  const setState ={
    setTitleId:useCallback((paylode:number|undefined)=>dispatch(setTitleInfo(paylode)),[dispatch]),
    setVideoInfoList:useCallback((paylode:setAddVideoList)=>dispatch(setVideoInfoList(paylode)),[dispatch]),
    addVideoInfoBox:useCallback(()=>dispatch(addVideoInfoBox()),[dispatch]),
    onAddVideo:useCallback(()=>dispatch(onAddVideo.request(state.videoAddList.map((paylode)=>({titleId:state.titleId as number,video_name:paylode.videoName,video_url:paylode.videoUrl})))),[dispatch, state.titleId, state.videoAddList])
  }

  return {state,setState};
}

export default useAddVideo