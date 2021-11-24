import { useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { category } from "../../constance";
import useModal from "../../utils/hooks/modal";
import { useNavigate } from "react-router";
const HeaderWrapper = styled.div`
  width: 1300px;
  height: 150px;
  margin:0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`  
const HeaderLogo = styled.p`
  font-size: 30px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
` 
const HeaderMenuBox = styled.div`
  display: flex;
`
const HeaderMenu = styled.div`
  font-size: 17px;
  margin: 0 50px;
  cursor: pointer;
  font-weight: 600;
`
const LoginButton = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 17px;
  width: 120px;
  height: 40px;
  font-weight: 600;
  border-radius: 1000px;
  border: 3px solid white;
  text-align: center;
  cursor:pointer;
  transition: all 0.5s;
  :hover{
    background: rgba(0,0,0,0.3);
  }
`

function Header (){
  const modalSetState= useModal().setState;
  const navigate = useNavigate();
  const LogMemo = useMemo(()=>{
    return localStorage.getItem("accessToken")?
    <LoginButton onClick={()=>{
    localStorage.removeItem("accessToken");
    localStorage.removeItem("isAdmin");
    alert("로그아웃 되었습니다");
    navigate("/");  
  }}>Logout</LoginButton>
    :<LoginButton onClick={modalSetState.setSignin}>Sign in</LoginButton>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[modalSetState.setSignin, navigate,localStorage.getItem("accessToken")])
  return (
    <HeaderWrapper>
      <Link to={"/"} ><HeaderLogo>TBY!</HeaderLogo></Link>
      <HeaderMenuBox>
        {category.map((categoryName,i)=>
          <Link to={`/lecture/${categoryName}`} key={i}><HeaderMenu >{categoryName}</HeaderMenu></Link>
        )}
      </HeaderMenuBox>
      {LogMemo}
    </HeaderWrapper>
  );
}

export default Header;