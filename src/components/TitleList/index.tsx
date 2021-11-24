import styled from "styled-components";
import { useNavigate, useParams } from "react-router";
import { category, subject } from "../../constance";
import { categoryName, subjectName, subjectType, titleInitType } from "../../types";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import Lodding from "../Lodding";
const VideoControllerWrapper = styled.div`
  width: 1020px;
  
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`
const VideoListName = styled.div`
  font-size: 40px;
  margin-left:20px;
  font-weight: 600;
`

const Controller = styled.div`
  display:flex;
  margin: 20px 0 0 20px;
  align-items: center;
`
const ControllerButton= styled.div<{isFocus:boolean}>`
  padding:0 20px;
  height: 30px;
  border-radius: 15px;
  margin-right:10px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  background:${(props)=>props.isFocus?"white":"none"};
  border:  3px solid ${(props)=>props.isFocus?" white":"transparent"};
  color:${(props)=>props.isFocus?"#664ceb":"white"};
  
`
const ListWrapper = styled.div`
  width: 1020px;
  min-height: calc(100% - 410px);
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding-top:20px ;
  
`
const VideoBox = styled(Link)`
  width: 46%;
  height: 50px;
  background-color: white;
  border-radius: 25px;
  margin: 5px 0;
  display: flex;
  align-items: center;
  padding: 0 30px;
  color: #664ceb;
  font-size: 18px;
  font-weight: 600;
  margin: 10px 20px;
`

interface titleListProps extends titleInitType{
  paramsCategory:number
}

const TitleList:React.FC<titleListProps> =(props)=>{
  const params:any= useParams();
  const navigate = useNavigate();
  const ControllerList = useMemo(()=>{
  if(props.paramsCategory){
    return(
    <Controller>
    <Link to={`/lecture/${params.category}`}><ControllerButton isFocus={!params.subject}>전체</ControllerButton></Link>
    {(subject[params.category as categoryName] as subjectType[]).map((props,i)=>(
        <Link key={i} to={`/lecture/${params.category}/${props.subjectName}`}><ControllerButton isFocus={params.subject===props.subjectName}>{props.subjectName}</ControllerButton></Link>
      ))}
  </Controller>)
  }
  else{
    navigate("/notfound");
  }
},[params.category, params.subject]);

  return(
    
    <>
    <VideoControllerWrapper>
    <VideoListName>{params.category}</VideoListName>
      {ControllerList}
    </VideoControllerWrapper>
    <ListWrapper>{
    props.lodding?<Lodding></Lodding>:<>
      {props.titles.map((props,i)=>(
        <VideoBox  key={i} to={`/video/${props.id}?name=${encodeURI(encodeURIComponent(props.name))}`}>{props.name}</VideoBox>
      ))}
    </>}
    </ListWrapper>
    </>
  );
}

export default TitleList;