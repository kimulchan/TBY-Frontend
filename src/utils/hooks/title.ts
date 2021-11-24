import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTitle, getTitleWithCategory, getTitleWithSubject } from "../../module/action/title";
import { reducerType } from "../../module/reducer";


const useTitle = ()=>{
  const state= useSelector((state:reducerType)=>state.title);
  const dispatch = useDispatch();
  const setState={
    setTitleWithCategory:useCallback((categoryId:number)=>dispatch(getTitleWithCategory.request(categoryId)),[dispatch]),
    setTitleWithSubject:useCallback((subjectId:number)=>dispatch(getTitleWithSubject.request(subjectId)),[dispatch]),
    getAllTitle:useCallback(()=>dispatch(getAllTitle.request()),[dispatch])
  }
  return {state,setState};
}

export default useTitle;