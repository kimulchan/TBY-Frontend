import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import TitleList from "../components/TitleList";
import { category, subject } from "../constance";
import { categoryName } from "../types";
import useTitle from "../utils/hooks/title";


const TitleListContainer = ()=>{
  const params:any= useParams();
  const {state,setState}= useTitle();
  const navigator = useNavigate();
  const categoryId = category.findIndex((props,i)=>
    props===params.category
  )+1;
    useEffect(()=>{
    if(!params.subject){
      if(categoryId){
        setState.setTitleWithCategory(categoryId as number);
      }
      else{
        navigator('/notfound');
      }
    }
    else{
      console.log(subject[params.category as categoryName]);
      const subjectId = subject[params.category as categoryName].find((props)=>
        props.subjectName===params.subject
      );
      if(subjectId&&categoryId){
        setState.setTitleWithSubject(subjectId.subjectId);
      }
      else{
        navigator('/notfound');
      }
      
    }
  },[params]);
  
  
  return <TitleList {...state} paramsCategory ={categoryId}></TitleList>
}

export default TitleListContainer;