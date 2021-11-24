import { Link } from "react-router-dom";
import styled from "styled-components";

const MainWrapper = styled.div`
  width: 1040px;
  display: flex;
  flex-wrap: wrap;
  margin:auto;
  justify-content: center;
`
const ControllerBox = styled(Link)`
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 20px;
  margin: 20px;
  font-size: 30px;
  font-weight: 600;
  color: #664ceb;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
  border: 3px solid white;
  :hover{
    background-color:#664ceb;
    color:white;
  }
`
const AdminMain = ()=>{
  return(
    <MainWrapper>
      <ControllerBox to="/admin/addTitle">강의 제목 추가</ControllerBox>
      <ControllerBox to="/admin/addVideo">강의 비디오 추가</ControllerBox>
    </MainWrapper>
  )
}

export default AdminMain;