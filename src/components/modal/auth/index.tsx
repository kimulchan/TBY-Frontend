
import styled from "styled-components";
import{Close} from "@styled-icons/evaicons-solid";
import useModal from "../../../utils/hooks/modal";
import { authModal } from "../../../constance";
import React from "react";
import { authInfoList, authInputActionType, authModalConstanceType} from "../../../types";
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  
  background-color: rgba(0,0,0,0.8);
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
const Discription = styled.p`
  font-size: 14px;
  margin: 10px 0;
  cursor: pointer;
`
interface Props extends authModalConstanceType{
  setInput:(paylode:authInputActionType)=>void;
  onLogin:()=>void;
}

const AuthModals:React.FC<Props> =(props)=>{
  const setModal = useModal().setState
  const {inputs,title,discription,setInput,onLogin}=props;

  const onChagneClose = ()=>{
    title==="JOIN"&& setModal.setSignup()
    title==="LOGIN"&& setModal.setSignin() 
  }
  const onChangeOtherModal = ()=>{
    setModal.setSignup();
    setModal.setSignin();
  }

  const onChangeInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {value,name}=e.currentTarget;
    setInput({type:name as authInfoList,value:value});
  }

  return(
    <Background>
      <ModalContainer>
        <div style={{marginBottom:"20px"}}>{title}</div>
        <CloseIcon onClick={onChagneClose}></CloseIcon>
        {inputs.map((props,i)=>(
          <InfoInput key={i}>
          <p>{props.infoName}</p>
          <input name={props.type} type={props.inputType} onChange={onChangeInput}></input>
        </InfoInput>
        ))}
        <Discription onClick={onChangeOtherModal}>{discription}</Discription>
        <SubmitButton onClick={onLogin}>{title}</SubmitButton>
      </ModalContainer>
    </Background>
  );
} 

export default AuthModals;