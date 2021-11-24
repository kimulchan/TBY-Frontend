import { useEffect } from "react";
import { useNavigate } from "react-router";
import AdminAddTitle from "../../components/admin/AdminAddTitle";
import Lodding from "../../components/Lodding";
import useAddTitle from "../../utils/hooks/addTitle";


const AdminAddTitleContainer = ()=>{
  
  const isAdmin = localStorage.getItem("isAdmin");
  const navigate = useNavigate();
  const {state,setState} = useAddTitle();
  useEffect(()=>{
    if(!isAdmin){
      alert("로그인 후 진행해 주세요");
      navigate("/admin/login");
    }
    
  },[isAdmin,state.lodding])
  return <AdminAddTitle {...state} {...setState}></AdminAddTitle>
}

export default AdminAddTitleContainer;