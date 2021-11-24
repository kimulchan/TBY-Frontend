import { useEffect } from "react";
import { useNavigate } from "react-router";
import AdminMain from "../../components/admin/AdminMain";

const AdminMainContainer = ()=>{
  const isAdmin = localStorage.getItem("isAdmin");
  const navigate = useNavigate();
  useEffect(()=>{
    if(!isAdmin){
      
      alert("로그인 후 진행해 주세요");
      navigate("/admin/login");
    }
  },[isAdmin])

  return <AdminMain></AdminMain>
}

export default AdminMainContainer;
