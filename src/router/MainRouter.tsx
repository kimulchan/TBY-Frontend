import { Route, Routes } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";
import MainPage from "../components/main";
import SignUpModal from "../components/modal/SignUp";
import NotFound from "../components/notFound";
import VideoList from "../components/videoBox";

const MainRouter = ()=>{
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<MainPage></MainPage>}/>
      <Route path="/lecture/:category" element={<VideoList></VideoList>}/>
      <Route path="/lecture/:category/:subject"element={<VideoList></VideoList>}/>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default MainRouter;