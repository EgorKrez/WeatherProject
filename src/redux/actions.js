import { createAction } from "redux-actions";
import { SHOW_FOR_NOW, SHOW_FOR_3_DAYS } from "./types";

export const showForNowAction = createAction(SHOW_FOR_NOW);
export const showFor3DaysAction = createAction(SHOW_FOR_3_DAYS);
