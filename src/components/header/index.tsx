import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 1300px;
  height: 150px;
  margin: auto;
  display: flex;
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
  margin: auto;

`
const HeaderMenu = styled.div`
  font-size: 17px;
  margin: 0 50px;
`
const LoginButton = styled.div`
  font-size: 17px;
  width: 120px;
  align-items: center;
  justify-content: center;
  display: flex;
`
const MenuHover = styled.div`
  
`
function Header (){
  return (
    <HeaderWrapper>
      <HeaderLogo>LOGO</HeaderLogo>
      <HeaderMenuBox>
        <HeaderMenu>Frontend</HeaderMenu>
        <HeaderMenu>Frontend</HeaderMenu>
        <HeaderMenu>Frontend</HeaderMenu>
        <HeaderMenu>Frontend</HeaderMenu>
      </HeaderMenuBox>
      <LoginButton>Sign up</LoginButton>
    </HeaderWrapper>
  );
}

export default Header;