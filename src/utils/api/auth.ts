import { AxiosResponse } from "axios";
import { uri } from "../../constance";
import { onJoinProps, onLoginProps } from "../../types";
import { getRequest } from "./default";
const ACCESSTOKEN_TIME = 60*60*24;

export const onLoginApi = async (loginRequest:onLoginProps)=>{
  try{
    const request = getRequest();
    const response:AxiosResponse<{access_token:string}> = await request.post(uri.signin,loginRequest);
    console.log(response);
    localStorage.setItem("accessToken",response.data.access_token);
    setTimeout(()=>{localStorage.removeItem("accessToken")},ACCESSTOKEN_TIME);
  }
  catch(error){
    throw error;
  }
}
export const onAdminLoginApi = async(loginRequest:onLoginProps)=>{
  try{
    const request = getRequest();
    const response:AxiosResponse<{access_token:string}> = await request.post(uri.adminLogin,loginRequest);
    localStorage.setItem("accessToken",response.data.access_token);
    localStorage.setItem("isAdmin","true");
  }
  catch(error){
    throw error;
  }
}

export const onJoinApi = async (joinRequest:onJoinProps)=>{
  try{
    const request = getRequest();
    await request.post(uri.signup,joinRequest);
  }
  catch(error){
    throw error;
  }
}

