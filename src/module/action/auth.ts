import {ActionType, createAction} from 'typesafe-actions';
import { authInputActionType } from '../../types';

export const INPUT = "signup/INPUT";

export const ON_LOGIN = "signup/ON_LOGIN";
export const ON_LOGIN_SUCCESS = "signup/ON_LOGIN_SUCCESS";
export const ON_LOGIN_FAILURE = "signup/ON_LOGIN_FAILURE";

export const setInput = createAction(INPUT)<authInputActionType>();

const actions = {setInput}

export type authActions=ActionType<typeof actions>;