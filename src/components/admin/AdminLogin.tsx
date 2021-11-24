import styled from "styled-components";
import { authInfoList, authInitType, authInputActionType } from "../../types";
import { authModal } from "../../constance";

const LoginBox = styled.div`
  width: 500px;
  margin: auto;
  text-align: center;
`
const LoginTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 40px;
`
const LoginInputTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-top: 20px;
`
const LoginInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  background-color: white;
  color: black;
  font-weight: 600;
  text-align: center;
  font-size: 18px;
  margin: 10px 0;
`
const LoginButton = styled.button`
  background-color: #664ceb;
  width: 200px;
  height: 50px;
  border-radius: 25px;
  font-size: 18px;
  font-weight: 600;
  border: 3px solid white;
  margin-top: 30px;
  cursor: pointer;
  transition: all .5s;
  :hover{
    background-color: white;
    color: #664ceb;
  }
`
interface adminProps extends authInitType{
  setInput:(paylode:authInputActionType)=>void;
  resetInput:()=>void;
  onAdminLogin:()=>void;
}
const AdminLogin:React.FC<adminProps> =(props)=>{
  const adminLogin=authModal.adminLogin;
  const{setInput,loginInfo,onAdminLogin}=props;
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const {value,name}=e.currentTarget;
    setInput({type:name as authInfoList,value:value});
  }
return(
  <LoginBox>
    <LoginTitle>{adminLogin.title}</LoginTitle>
    {adminLogin.inputs.map((props)=>(
    <>
      <LoginInputTitle>{props.infoName}</LoginInputTitle>
      <LoginInput type={props.inputType} name={props.type} onChange={onChangeInput} value={loginInfo[props.type]}></LoginInput>
    </>))}
    <LoginButton onClick={onAdminLogin}>Login</LoginButton>
  </LoginBox>
)
}

export default AdminLogin;