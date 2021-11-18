import { AxiosResponse } from "axios";
import { uri } from "../../constance";
import { loginInfo, onJoinProps, onLoginProps } from "../../types";
import { getRequest } from "./default";


export const onLoginApi = async (loginRequest:onLoginProps)=>{
  try{
    const request = getRequest();
    const response:AxiosResponse<{accessToken:string}> = await request.post(uri.signin,{email:loginRequest.id,password:loginRequest.password});
    localStorage.setItem("accessToken",response.data.accessToken);
  }
  catch(error){
    throw error;
  }
}

export const onJoinApi = async (joinRequest:onJoinProps)=>{
  try{
    const request = getRequest();
    await request.post(uri.signup,{email:joinRequest.id,password:joinRequest.password,name:joinRequest.name})
  }
  catch(error){
    throw error;
  }
}

