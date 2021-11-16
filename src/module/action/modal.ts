import { ActionType, createAction } from "typesafe-actions";


export const SIGNUP_SETMODAL = "modal/SIGNUP_SETMODAL" as const;

export const setSignupModal = createAction(SIGNUP_SETMODAL)();


const actions = {setSignupModal};

export type modalActions = ActionType<typeof actions>