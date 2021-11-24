import { ActionType, createAsyncAction } from "typesafe-actions";
import { titleType } from "../../types";


export const GET_TITLE_WITH_CATEGORY = "GET_TITLE_WITH_CATEGORY";
export const GET_TITLE_WITH_CATEGORY_SUCCESS = "GET_TITLE_WITH_CATEGORY_SUCCESS";
export const GET_TITLE_WITH_CATEGORY_FAILURE = "GET_TITLE_WITH_CATEGORY_FAILURE";

export const GET_TITLE_WITH_SUBJECT = "GET_TITLE_WITH_SUBJECT";
export const GET_TITLE_WITH_SUBJECT_SUCCESS = "GET_TITLE_WITH_SUBJECT_SUCCESS";
export const GET_TITLE_WITH_SUBJECT_FAILURE = "GET_TITLE_WITH_SUBJECT_FAILURE";

export const GET_ALL_TITLE = "GET_ALL_TITLE";
export const GET_ALL_TITLE_SUCCESS ="GET_ALL_TITLE_SUCCESS";
export const GET_ALL_TITLE_FAILURE = "GET_ALL_TITLE_FAILURE";

export const getTitleWithSubject = createAsyncAction(GET_TITLE_WITH_SUBJECT,GET_TITLE_WITH_SUBJECT_SUCCESS,GET_TITLE_WITH_SUBJECT_FAILURE)<number,titleType[],undefined>();
export const getTitleWithCategory = createAsyncAction(GET_TITLE_WITH_CATEGORY,GET_TITLE_WITH_CATEGORY_SUCCESS,GET_TITLE_WITH_SUBJECT_FAILURE)<number,titleType[],undefined>();
export const getAllTitle =createAsyncAction(GET_ALL_TITLE,GET_ALL_TITLE_SUCCESS,GET_ALL_TITLE_FAILURE)<undefined,titleType[],undefined>();
const actions ={
  getTitleWithCategory,getTitleWithSubject,getAllTitle
};

export type titleActions=ActionType<typeof actions>;