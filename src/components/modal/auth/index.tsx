import styled from 'styled-components';
import { Close } from '@styled-icons/evaicons-solid';
import useModal from '../../../utils/hooks/modal';
import React from 'react';
import {
  authInfoList,
  authInitType,
  authInputActionType,
  authModalConstanceType,
} from '../../../types';
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 0;
`;
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
  background: white;
  div > {
    color: #664ceb;
  }
`;
const CloseIcon = styled(Close)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  cursor: pointer;
  color: #664ceb;
  filter: brightness(0);
`;
const InfoInput = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    font-size: 18px;
    font-weight: 600;
    margin: 20px 0 10px 0;
    color: black;
  }

  > input {
    height: 40px;
    margin-bottom: 20px;
    border: none;
    border-radius: 20px;
    background-color: white;
    color: black;
    font-weight: 600;
    font-size: 17px;
    text-align: center;
    border: 2px solid #664ceb;
  }
`;
const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  margin-top: 40px;
  cursor: pointer;
  color: black;
  background-color: white;
  transition: all 0.5s;
  border: 3px solid #664ceb;
  :hover {
    background: #664ceb;
    color: white;
  }
`;
const Discription = styled.p`
  margin: 0;
  color: black;
  font-size: 14px;
  margin: 10px 0;
  cursor: pointer;
  transition: color 0.5s;
  :hover {
    color: #664ceb;
  }
`;

interface Props extends authModalConstanceType, authInitType {
  setInput: (paylode: authInputActionType) => void;
  onJoin: () => void;
  onLogin: () => void;
  resetInput: () => void;
}

const AuthModals: React.FC<Props> = props => {
  const setModal = useModal().setState;
  const { inputs, title, discription, onJoin, loginInfo, setInput, resetInput, onLogin } = props;

  
  const onSubmitClick = () => {
    title === 'JOIN' && onJoin();
    title === 'LOGIN' && onLogin();
  };

  const onChagneClose = () => {
    resetInput();
    title === 'JOIN' && setModal.setSignup();
    title === 'LOGIN' && setModal.setSignin();
  };
  const onChangeOtherModal = () => {
    resetInput();
    setModal.setSignup();
    setModal.setSignin();
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setInput({ type: name as authInfoList, value: value });
  };

  return (
    <Background onClick={onChagneClose}>
      <ModalContainer onClick={(e)=>{e.stopPropagation()}}>
        <div style={{ marginBottom: '20px', color: 'black' }}>{title}</div>
        <CloseIcon onClick={onChagneClose}></CloseIcon>
        {inputs.map((props, i) => (
          <InfoInput key={i}>
            <p>{props.infoName}</p>
            <input
              name={props.type}
              type={props.inputType}
              onChange={onChangeInput}
              value={loginInfo[props.type]}
            ></input>
          </InfoInput>
        ))}
        <Discription onClick={onChangeOtherModal}>{discription}</Discription>
        <SubmitButton onClick={onSubmitClick}>{title}</SubmitButton>
      </ModalContainer>
    </Background>
  );
};

export default AuthModals;
