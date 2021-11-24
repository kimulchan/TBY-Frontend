import { AxiosError, AxiosResponse } from "axios";
import { uri } from "../../constance";
import { titleAddPaylode, titleType } from "../../types";
import { getRequestWithAccessToken } from "./default"


export const getTitleWithCategoryApi = async(token:string,categoryId:number)=>{
  try
  {
  const request = getRequestWithAccessToken(token,'json');
  return await request.get(`/title/category/${categoryId}`);
} 
  catch(error){
    throw error;
  }
}

export const getTitleWithSubjectApi = async(token:string,subjectId:number)=>{
  try{
    const request = getRequestWithAccessToken(token);
    return await request.get(`/title/subject/${subjectId}`);
  }
  catch(error){
    throw error
  }
}

export const postTitleApi = async(token:string,titleAddPaylode:titleAddPaylode)=>{
  try{
    const request = getRequestWithAccessToken(token);
    await request.post(uri.adminAddTitle,titleAddPaylode);
  }
  catch(error){
    throw error;
  }
}

export const allTitleApi = async(token:string)=>{
  try{
    const request = getRequestWithAccessToken(token);
    return await request.get(uri.title);
  }
  catch(error){
    throw error;
  }
}