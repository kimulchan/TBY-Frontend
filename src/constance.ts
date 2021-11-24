import { authModalType, categoryName, categoryType } from "./types"


export const category:categoryName[]=["FrontEnd","BackEnd","iOS","Android"]

export const subject:categoryType = {
  FrontEnd:[{
    subjectName:"JavaScript",
    subjectId:1
  },{
    subjectName:"TypeScript",
    subjectId:2
  }],
  BackEnd:[{
    subjectId:5,
    subjectName:"Java"
  },{
    subjectId:6,
    subjectName:"Go"
  },{
    subjectId:4,
    subjectName:"TypeScript"
  },{
    subjectId:3,
    subjectName:"JavaScript"
   }
   ,{
    subjectId:7,
    subjectName:"Python"
  }
],
  Android:[{
    subjectName:"Java",
    subjectId:9
  }],
  iOS:[{
    subjectId:8,
    subjectName:"Swift"
  }]
}
//api uri
export const uri={
  signup:"/user/signup",
  signin:"/user/login",
  adminLogin:"/admin/login",
  adminAddTitle:"/admin/add_title",
  adminAddVideo:"/admin/add_video",
  title:"/title"
}

//auth modal constance

export const authModal:authModalType = {
  signin:{
    title:"LOGIN",
    discription:"아직 회원이 아니신가요?",
    inputs:[{
      infoName:"ID",
      type:"id"
    },{
      infoName:"PASSWORD",
      type:"password",
      inputType:"password"
    }]
  },
  signup:{
    title:"JOIN",
    discription:"회원이신가요?",
    inputs:[{
      infoName:"NAME",
      type:"name"
    },{
      infoName:"ID",
      type:"id"
    },{
      infoName:"PASSWORD",
      type:"password",
      inputType:"password"
    },{
      infoName:"PASSWORD CHACK",
      type:"passwordCheck",
      inputType:"password"
    }]
  },
  adminLogin:{
    title:"ADMIN LOGIN",
    discription:"",
    inputs:[{
      infoName:"ID",
      type:"id"
    },{
      infoName:"PASSWORD",
      type:"password",
      inputType:"password"
    }]
  }
}
