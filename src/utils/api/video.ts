import { uri } from "../../constance";
import { addVideoPaylode } from "../../types";
import { getRequestWithAccessToken } from "./default"


export const getVideoListApi = async(token:string,titleId:number)=>{
  try{
    const request = getRequestWithAccessToken(token);
    return request.get(`/video/${titleId}`); 
  }
  catch(error){
    throw error
  }
}

export const addVideoApi =async(token:string,paylode:addVideoPaylode[])=>{
  try{
    const request = getRequestWithAccessToken(token);
    request.post(uri.adminAddVideo,paylode)
  }
  catch(error){
    throw error;
  }
}