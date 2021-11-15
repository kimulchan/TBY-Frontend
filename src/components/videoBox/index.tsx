import styled from "styled-components";
import { useParams } from "react-router";
const Controller = styled.div`
  
`

const ListWrapper = styled.div`
  width: 1020px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`
const VideoBox = styled.div`
  width: 300px;
  height: 210px;
  margin: 20px 20px;
  background-color: white;
  border: 3px solid white;
  border-radius: 10px;
`

const VideoList =()=>{
  
  return(
    <>
    <Controller></Controller>
    <ListWrapper>
      <VideoBox></VideoBox>
      <VideoBox></VideoBox>
      <VideoBox></VideoBox>
      <VideoBox></VideoBox>
      <VideoBox></VideoBox>
      <VideoBox></VideoBox>
      <VideoBox></VideoBox>
      <VideoBox></VideoBox>
      <VideoBox></VideoBox>
      <VideoBox></VideoBox>
    </ListWrapper>
    </>
  );
}

export default VideoList;