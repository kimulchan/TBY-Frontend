import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAddTitle, setInput } from "../../module/action/addTitle";
import { reducerType } from "../../module/reducer";
import { titleAddInputPaylode } from "../../types";


const useAddTitle = ()=>{
  const state = useSelector((state:reducerType)=>state.addTitle);
  const dispatch = useDispatch();
  const setState = {
    setInput:useCallback((paylode:titleAddInputPaylode)=>dispatch(setInput(paylode)),[dispatch]),
    setAddTitle:useCallback(()=>dispatch(onAddTitle.request({name:state.titleAddInfo.addTitleName,subjectId:Number(state.titleAddInfo.subjectId)})),[dispatch, state.titleAddInfo.addTitleName, state.titleAddInfo.subjectId])
  }
  
  return {state,setState};
}

export default useAddTitle;