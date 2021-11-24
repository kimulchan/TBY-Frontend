import {ActionType, createAction, createAsyncAction} from 'typesafe-actions';
import { authInputActionType, onJoinProps, onLoginProps } from '../../types';

export const INPUT = "auth/INPUT";
export const RESET_INPUT = "auth/RESET_INPUT";

export const ON_LOGIN = "auth/ON_LOGIN";
export const ON_LOGIN_SUCCESS = "auth/ON_LOGIN_SUCCESS";
export const ON_LOGIN_FAILURE = "auth/ON_LOGIN_FAILURE";

export const ON_JOIN = "auth/ON_JOIN";
export const ON_JOIN_SUCCESS= "auth/ON_JOIN_SUCCESS";
export const ON_JOIN_FAILURE = "auth/ON_JOIN_FAILURE";

export const ON_ADMIN_LOGIN = "auth/ON_ADMIN_LOGIN";
export const ON_ADMIN_LOGIN_SUCCESS= "auth/ON_ADMIN_LOGIN_SUCCESS";
export const ON_ADMIN_LOGIN_FAILURE = "auth/ON_ADMIN_LOGIN_FAILURE";

export const setInput = createAction(INPUT)<authInputActionType>();
export const resetInput = createAction(RESET_INPUT)();

export const onLogin =createAsyncAction(ON_LOGIN,ON_LOGIN_SUCCESS,ON_LOGIN_FAILURE)<onLoginProps,undefined,undefined>();
export const onJoin = createAsyncAction(ON_JOIN,ON_JOIN_SUCCESS,ON_LOGIN_FAILURE)<onJoinProps,undefined,undefined>();
export const onAdminLogin= createAsyncAction(ON_ADMIN_LOGIN,ON_ADMIN_LOGIN_SUCCESS,ON_ADMIN_LOGIN_FAILURE)<onLoginProps,undefined,undefined>();

const actions = {setInput,resetInput,onLogin,onJoin,onAdminLogin}

export type authActions=ActionType<typeof actions>;