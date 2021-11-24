import { useEffect } from "react";
import { useNavigate } from "react-router";
import AdminAddVideo from "../../components/admin/AdminAddVideo";
import useAddVideo from "../../utils/hooks/addVideo";
import useTitle from "../../utils/hooks/title";

const AdminAddVideoContainer = ()=>{
  const {state,setState}=useAddVideo();
  const title = useTitle();
  const isAdmin = localStorage.getItem("isAdmin");
  const navigate = useNavigate();
  useEffect(()=>{
    if(!isAdmin){
      alert("로그인 후 진행해 주세요");
      navigate("/admin/login");
    }
    title.setState.getAllTitle();
  },[isAdmin])

  return <AdminAddVideo {...state} {...setState} titleList={title.state.titles}></AdminAddVideo>
}

export default AdminAddVideoContainer;