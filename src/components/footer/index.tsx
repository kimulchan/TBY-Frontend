import styled from "styled-components";

const FooterBox = styled.div`
  width: 1300px;
  height: 150px;
  display: flex;
  margin: auto;
  justify-content: center;
  
`
const FooterItem = styled.div`
  font-size: 20px;
  margin: 0 40px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Footer (){
  return (
    <FooterBox>
      <FooterItem>GITHUB</FooterItem>
      <FooterItem>FACEBOOK</FooterItem>
      <FooterItem>INSTARGRAM</FooterItem>
    </FooterBox>
  )
}

export default Footer;