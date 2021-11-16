import { type } from "os";

export type subjectName = "JavaScript" | "Java" | "Swift" | "Python" | "Go" | "HTML/CSS" | "TypeScript";

export type subjectType = {
  subjectName: subjectName;
  subjectId: number;
};

export type categoryName = "FrontEnd" | "BackEnd" | "Android" | "iOS";

export type categoryType = Record<categoryName,subjectType[]>;

//modalType
export interface modalType {
  isSigninOpen:boolean
  isSignupOpen:boolean
}

//login (signin)
export type authInfoList = "id" | "password" | "passwordCheck";
export type loginInfo = Record<authInfoList,string>
export interface authInputActionType {
  type:authInfoList;
  value:string;
}

//auth modal type
export type modalInputType = {
  infoName:string,
  type:authInfoList
  inputType?:string
}
export type authModalConstanceType ={
  title:string;
  inputs:modalInputType[];
  discription:string;
}
export type authModalList = "signin" | "signup"; 
export type authModalType =Record<authModalList,authModalConstanceType>

