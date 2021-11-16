import styled from "styled-components";
import{Close} from "@styled-icons/evaicons-solid";
import { useSelector } from "react-redux";
import { reducerType } from "../../module/reducer";
import useModal from "../../utils/hooks/modal";
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.7);
  z-index:0;
` 

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  padding: 25px;
  border-radius: 10px;
  text-align: center;
  font-size: 35px;
  font-weight: 600;
  border: 2px solid white;
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
    margin: 20px 0 10px 0;
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
  font-size: 15px;
  font-weight: 600;
  border: none;
  margin-top: 40px;
  cursor: pointer;
  color: white;
  background:linear-gradient(to bottom right,blue,pink); 
`
const SignUpModal =()=>{
  const setModal = useModal().setState
  return(
    <Background>
      <ModalContainer>
        <div style={{marginBottom:"20px"}}>LOGIN</div>
        <CloseIcon onClick={setModal.setSignup}></CloseIcon>
        <InfoInput>
          <p>ID</p>
          <input></input>
        </InfoInput>
        <InfoInput>
          <p>PASSWORD</p>
          <input></input>
        </InfoInput>
        <SubmitButton>LOGIN</SubmitButton>
      </ModalContainer>
    </Background>

  );
}

export default SignUpModal;