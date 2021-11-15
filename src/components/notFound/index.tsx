import styled from "styled-components";

const NotFoundBox = styled.div`
  height: 421px;
  width: 1300px;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
`
const NotFoundTitle = styled.p`
  font-size: 250px;
  font-weight: 700;

`
const NotFoundDiscription = styled.p`
  font-size: 50px;
  font-weight: 600;
`


const NotFound = ()=>{
  return(
    <NotFoundBox>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundDiscription>Not Found</NotFoundDiscription>
    </NotFoundBox>
  );
}

export default NotFound;