import styled from "styled-components";
import FrontendImage from "../../assets/image/frontendImage.jpg";
const MainPageBox = styled.div`
  width: 1300px;
  display: flex;
  margin-left: auto;
`
const LeftBox = styled.div`
  width: 45%;
`
const MainTitle = styled.p`
  font-size: 100px;
  font-weight: 700;
  margin-top: 70px;
`
const MainTitleBorder = styled.div`
  width: 100px;
  height: 30px;
  border-bottom: 8px solid black;
`
const CategoryDescription = styled.div`
  margin-top: 280px;
  font-size: 17px;
  color:#5e5a5a;
  margin-bottom: 50px;
`
const RightBox = styled.div`
  width: 55%;
  background-image: url(${FrontendImage});
`

function MainPage (){

  return(
    <MainPageBox>
      <LeftBox>
        <MainTitle>Frontend</MainTitle>
        <MainTitleBorder/>
        <CategoryDescription>frontend description</CategoryDescription>
      </LeftBox>
      <RightBox>

      </RightBox>
    </MainPageBox>
  )
}

export default MainPage;