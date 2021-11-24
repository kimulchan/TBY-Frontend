import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import VideoList from "../components/videoList"
import useVideo from "../utils/hooks/video";

const VideoListContainer = ()=>{
  const params:any = useParams();
  const navigate= useNavigate();
  const {state,setState}=useVideo();
  console.log(params);
  useEffect(()=>{
    if(params.id){
      setState.setVideo(params.id);
      if(!state.videos){
        navigate("/notFound");
      }
    }
    else{
      navigate("/notFound");
    }
  },[navigate, params.id]);

  return <VideoList {...state}></VideoList>
}
export default VideoListContainer