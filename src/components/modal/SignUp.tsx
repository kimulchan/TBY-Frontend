import styled from "styled-components";
import{Close} from "@styled-icons/evaicons-solid";
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.5);
  z-index:0;
` 

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  padding: 16px;
  border-radius: 10px;
  text-align: center;
  font-size: 35px;
  font-weight: 600;
`
const CloseIcon = styled(Close)`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 2rem;
    cursor: pointer;
`;
const InfoInput = styled.div`
  display: flex;
  flex-direction: column;
  >p{
    font-size: 18px;
    font-weight: 600;
    margin: 30px 0 10px 0;
  }

  >input{
    
    height: 40px;
    margin-bottom: 20px;
    border: none;
    border-radius: 20px;
    color: black;
    font-weight: 600;
    font-size: 17px;
    text-align: center;
}
`
const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  margin-top: 40px;
  cursor: pointer;
  color: white;
  background:linear-gradient(to bottom right,blue,pink); 
`
const SignUpModal =()=>{
  return(
    <Background>
      <ModalContainer>
        <div>Login</div>
        <CloseIcon></CloseIcon>
        <InfoInput>
          <p>id</p>
          <input></input>
        </InfoInput>
        <InfoInput>
          <p>password</p>
          <input></input>
        </InfoInput>
        <SubmitButton>login</SubmitButton>
      </ModalContainer>
      
    </Background>
  );
}

export default SignUpModal;