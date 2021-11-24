import { Route, Routes } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";
import MainPage from "../components/main";
import Modal from "../components/modal";
import NotFound from "../components/notFound";
import AdminAddTitleContainer from "../container/Admin/AdminAddTitle";
import AdminAddVideoContainer from "../container/Admin/AdminAddVideo";
import AdminLoginContainer from "../container/Admin/AdminLogin";
import AdminMainContainer from "../container/Admin/AdminMainContainer";
import TitleListContainer from "../container/TitleList";
import VideoListContainer from "../container/VideoList";

const MainRouter = ()=>{
  return (
    <>
    <Header/>
    <Modal></Modal>
    <Routes>
      <Route path="/" element={<MainPage></MainPage>}/>
      <Route path="/admin/login" element={<AdminLoginContainer></AdminLoginContainer>}></Route>
      <Route path="/admin" element={<AdminMainContainer></AdminMainContainer>}/>
      <Route path="/admin/addVideo" element={<AdminAddVideoContainer/>}/> 
      <Route path="/admin/addTitle" element={<AdminAddTitleContainer/>}/> 
      <Route path="/lecture/:category" element={<TitleListContainer></TitleListContainer>}/>
      <Route path="/lecture/:category/:subject"element={<TitleListContainer></TitleListContainer>}/>
      <Route path="/video/:id" element={<VideoListContainer></VideoListContainer>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default MainRouter;