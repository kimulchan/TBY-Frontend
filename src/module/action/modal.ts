import { ActionType, createAction } from "typesafe-actions";


export const SIGNIN_SETMODAL = "modal/SIGNIN_SETMODAL" as const;
export const SIGNUP_SETMODAL = "modal/SIGNUP_SETMODAL" as const
export const setSigninModal = createAction(SIGNIN_SETMODAL)();
export const setSignupModal = createAction(SIGNUP_SETMODAL)();


const actions = {setSigninModal,setSignupModal};

export type modalActions = ActionType<typeof actions>