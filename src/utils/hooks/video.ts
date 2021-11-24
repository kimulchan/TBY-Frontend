import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getVideoList } from "../../module/action/video";
import { reducerType } from "../../module/reducer"


const useVideo = ()=>{
  const state= useSelector((state:reducerType)=>state.video);
  const dispatch = useDispatch();
  const setState = {
    setVideo:useCallback((titleId:number)=>dispatch(getVideoList.request(titleId)),[dispatch])
  }
  return {state,setState}
}

export default useVideo;