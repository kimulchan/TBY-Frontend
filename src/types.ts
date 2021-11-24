
export type subjectName =
  | 'JavaScript'
  | 'Java'
  | 'Swift'
  | 'Python'
  | 'Go'
  | 'HTML/CSS'
  | 'TypeScript';

export type subjectType = {
  subjectName: subjectName;
  subjectId: number;
};

export type categoryName = 'FrontEnd' | 'BackEnd' | 'Android' | 'iOS';

export type categoryType = Record<categoryName, subjectType[]>;

//modalType
export interface modalType {
  isSigninOpen: boolean;
  isSignupOpen: boolean;
}

//auth
export type authInfoList = 'id' | 'password' | 'passwordCheck' | 'name';
export type loginInfo = Record<authInfoList, string>;

export interface authInitType {
  loginInfo: loginInfo;
  lodding: boolean;
  isSuccess:boolean;
}
export interface authInputActionType {
  type: authInfoList;
  value: string;
}
export type modalInputType = {
  infoName: string;
  type: authInfoList;
  inputType?: string;
};
export type authModalConstanceType = {
  title: string;
  inputs: modalInputType[];
  discription: string;
};
export type authModalList = 'signin' | 'signup' | 'adminLogin';
export type authModalType = Record<authModalList, authModalConstanceType>;

//login type
export interface onLoginProps {
  id: string;
  password: string;
}

export interface onJoinProps extends onLoginProps{
  name:string
}

//title type
export type titleType ={
  name:string
  id:number
} 

export interface titleInitType {
  titles:titleType[];
  lodding:boolean;
}

//videoType 
export type videoType ={
  id:number,
  video_name:string,
  video_url:string
}
export interface videoInitType {
  videos:videoType[];
  lodding:boolean;
}

//titleAdd
export type titleAddList = "category" | "subjectId" | "addTitleName";

export type titleAddInputTest = Record<titleAddList,string>;
export interface titleAddInput extends Omit<titleAddInputTest,"subjectId"> {
  subjectId?:number
}
export interface titleAddPaylode {
  name: string,
  subjectId: number
}
export type titleAddInputPaylode = {
  name:titleAddList,
  value:string
}
export interface titleAddInitType {
  titleAddInfo:titleAddInput,
  lodding:boolean
}

//videoAdd 
export type addVideoPaylode={
  video_name:string,
  video_url:string,
  titleId:number
}

export interface setAddVideoList {
  changeInfoName:addVideoInfoList,
  changeInfoNum:number,
  value:string
}
export type addVideoInfoList = "videoName" | "videoUrl";

export type addVideoList=Record<addVideoInfoList,string>

export interface videoAddInitType{
  videoAddList:addVideoList[],
  titleId?:number,
  lodding:boolean
}