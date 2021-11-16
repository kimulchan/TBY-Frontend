import { Link } from "react-router-dom";
import styled from "styled-components";
import { category } from "../../constance";
import useModal from "../../utils/hooks/modal";

const HeaderWrapper = styled.div`
  width: 1300px;
  height: 150px;
  margin: auto;
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
`

function Header (){
  const modalSetState= useModal().setState;

  return (
    <HeaderWrapper>
      <Link to={"/"} ><HeaderLogo>LOGO</HeaderLogo></Link>
      <HeaderMenuBox>
        {category.map((categoryName,i)=>
          <Link to={`/lecture/${categoryName}`} key={i}><HeaderMenu >{categoryName}</HeaderMenu></Link>
        )}
      </HeaderMenuBox>
      <LoginButton onClick={modalSetState.setSignin}>Sign in</LoginButton>
    </HeaderWrapper>
  );
}

export default Header;