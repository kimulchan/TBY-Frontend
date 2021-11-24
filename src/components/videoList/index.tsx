import React from "react";
import styled from "styled-components";
import { videoInitType } from "../../types";
import Lodding from "../Lodding";

const VideoListWrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
`
const VideoBoxList = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display:flex;
`
const VideoBox = styled.a`
  width: 480px;
  height: 40px;
  border-radius: 20px;
  background-color: white;
  color:#664ceb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  margin: 10px 10px;
`
 
const VideoList :React.FC<videoInitType>= (props)=>{
  const queryName = document.location.search.split("=")[1];
   return(
    <VideoListWrapper>
      <Title>{decodeURI(decodeURIComponent(queryName))}</Title>
      <VideoBoxList>
        {props.lodding?
        <Lodding></Lodding>:
        <>
          {props.videos.map((props,i)=><VideoBox key={i} href={props.video_url}>{props.video_name}</VideoBox>)}
          </>}
        
      </VideoBoxList>
    </VideoListWrapper>
  )
}

export default VideoList;