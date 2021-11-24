import { useEffect } from "react";
import { useNavigate } from "react-router";
import AdminLogin from "../../components/admin/AdminLogin";
import useAuth from "../../utils/hooks/auth";

const AdminLoginContainer=()=>{
  const {state,setState}= useAuth();
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin");
  useEffect(()=>{
    if(state.isSuccess||isAdmin){
      navigate("/admin");
    }
  },[navigate, state.isSuccess]);
  return <AdminLogin {...state} {...setState}></AdminLogin> 

}

export default AdminLoginContainer;