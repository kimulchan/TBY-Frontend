import { authModalType, categoryName, categoryType } from "./types"


export const category:categoryName[]=["FrontEnd","BackEnd","Android","iOS",]

export const subject:categoryType = {
  FrontEnd:[{
    subjectName:"JavaScript",
    subjectId:0
  },{
    subjectName:"TypeScript",
    subjectId:1
  }],
  BackEnd:[{
    subjectId:0,
    subjectName:"Java"
  },{
    subjectId:1,
    subjectName:"Go"
  },{
    subjectId:2,
    subjectName:"JavaScript"
  },{
    subjectId:3,
    subjectName:"Python"
  }],
  Android:[{
    subjectName:"Java",
    subjectId:0
  }],
  iOS:[{
    subjectId:0,
    subjectName:"Swift"
  }]
}
//api uri
export const uri={
  signup:""
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
  }
}
