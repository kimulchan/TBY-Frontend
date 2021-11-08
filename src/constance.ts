import { categoryName, categoryType } from "./types"

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