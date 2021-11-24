import { ActionType, createAction, createAsyncAction } from "typesafe-actions";
import { titleAddInputPaylode, titleAddPaylode } from "../../types";


export const INPUT = "addTitle/INPUT";

export const ON_ADD_TITLE = "addTitle/ON_ADD_TITLE";
export const ON_ADD_TITLE_SUCCESS = "addTitle/ON_ADD_TITLE_SUCCESS";
export const ON_ADD_TITLE_FAILURE = "addTitle/ON_ADD_TITLE_FAILURE";

export const setInput = createAction(INPUT)<titleAddInputPaylode>();
export const onAddTitle = createAsyncAction(ON_ADD_TITLE,ON_ADD_TITLE_SUCCESS,ON_ADD_TITLE_FAILURE)<titleAddPaylode,undefined,undefined>()

const actions = {setInput,onAddTitle};

export type addTitleActions = ActionType<typeof actions>;