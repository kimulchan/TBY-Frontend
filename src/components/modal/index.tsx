import { authModal } from "../../constance";
import useModal from "../../utils/hooks/modal";
import useAuth from "../../utils/hooks/auth";
import AuthModals from "./auth";
const Modal =()=>{
  const state = useModal().state;
  const data = authModal;
  const setAuth = useAuth().setState;
  const authState = useAuth().state
  return (<>
    {state.isSigninOpen && <AuthModals {...data.signin} {...setAuth} {...authState}/>}
    {state.isSignupOpen && <AuthModals {...data.signup} {...setAuth} {...authState}/> }
    </>
  )
}

export default Modal;