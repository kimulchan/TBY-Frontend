import React, { useState } from "react";
import styled from "styled-components";
import { addVideoInfoList, addVideoList, setAddVideoList, titleType, videoAddInitType } from "../../types";

const VideoWrapper = styled.div`
  width: 1000px;
  margin:0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const VideoTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 20px;
`
const VideoSelectWrap = styled.div`
  display: flex;
`
const VideoSelect= styled.select`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  background-color: white;
  color: black;
  font-size: 18px;
  padding: 0 10px;
  appearance: none;
  text-align: center;
  margin: 10px 10px;
  font-weight: 600;
  cursor: pointer;
  > option {
    color: black;
  }
`
const AddVideoInfoName= styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  border-top: 3px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  color:black;
  font-weight: 600;
  font-size: 19px;
  cursor: pointer;
`
const NoneTitle = styled.div`
 font-size: 40px;
 height: 250px;
 display: flex;
 align-items: center;
 font-weight: 600;
`
const VideoNameInfoInput = styled.input`
  width: 30%;
  height: 100%;
  background-color: white;
  color: black;
  font-size: 19px;
  border: none;
  border-right: 3px solid black;
  border-radius: 0;
  padding: 0 10px;
`

const UrlInfoInput = styled.input`
  width: 70%;
  height: 100%;
  background-color: white;
  color: black;
  font-size: 19px;
  border-radius: 0;
  border:none;
  padding: 0 10px;
`
const SubmitButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 20px;
  background-color:  #664ceb;
  border: 3px solid white;
  transition: all .5s;
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
  cursor: pointer;
:hover{
    background-color: white;
    color: #664ceb;
  }
`
interface addVideoProps extends videoAddInitType {
  setTitleId:(payload:number|undefined)=>void,
  setVideoInfoList:(paylode:setAddVideoList)=>void,
  addVideoInfoBox:()=>void,
  onAddVideo:()=>void,
  titleList:titleType[]
}

const AdminAddVideo:React.FC<addVideoProps> = (props)=>{
  const {setTitleId,titleList,titleId,videoAddList,setVideoInfoList,addVideoInfoBox,onAddVideo}=props;
  
  const onChangeTitleSelect=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    const {value}=e.target;
    if(value)setTitleId(Number(value));
    else setTitleId(undefined);
  }
  
  const onChangeVideoInfoList =(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {value,name,id}=e.target;
    const paylode:setAddVideoList ={
      changeInfoName:name as addVideoInfoList,
      changeInfoNum:Number(id),
      value:value
    }
    setVideoInfoList(paylode);
  }
  return (
    <VideoWrapper>
      <VideoTitle>Add Video</VideoTitle>
      <VideoSelect onChange={onChangeTitleSelect}>
        <option value="">클릭하여 선택하세요</option>
        {titleList.map((props)=><option value={props.id}>{props.name}</option>)}
      </VideoSelect>

      {titleId?<>{videoAddList.map((props,i)=>(
      <AddVideoInfoName key={i}>
        <VideoNameInfoInput placeholder="VideoName" value={props.videoName} name="videoName" id={`${i}`} onChange={onChangeVideoInfoList}></VideoNameInfoInput>
        <UrlInfoInput value={props.videoUrl} placeholder="Url" name="videoUrl" id={`${i}`} onChange={onChangeVideoInfoList}></UrlInfoInput>
      </AddVideoInfoName>
      ))}
      <AddVideoInfoName onClick={addVideoInfoBox} style={{borderBottom:"3px solid black"}}>Plus</AddVideoInfoName>
      <SubmitButton onClick={onAddVideo}>강의 추가하기</SubmitButton>
      </>:<NoneTitle>title 선택 후 실행해 주세요</NoneTitle>
      }
      
      
    </VideoWrapper>
  )
}

export default AdminAddVideo;