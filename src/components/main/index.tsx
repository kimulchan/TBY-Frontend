import styled from "styled-components";

const MainPageBox = styled.div`
  width: 1064px;
  min-height: 421px;
  display: flex;
  margin: auto;
  flex-direction: column;
  
`
const MainTitle = styled.p`
  font-size: 70px;
  font-weight: 700;
  margin-top: 70px;
`

const Subheading = styled.div`
  font-size: 30px;
  margin-top: 10px;
  font-weight: 600;
`
const Description = styled.div`
  font-size: 17px;
  margin-top: 30px;
  width: 500px;
  margin-bottom: 50px;
`




function MainPage (){

  return(
    <MainPageBox>
      
        <MainTitle>Lending Page</MainTitle>
        <Subheading>lending page subheading</Subheading>
        <Description> description </Description>
      
    </MainPageBox>
  )
}

export default MainPage;