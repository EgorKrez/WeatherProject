import { SHOW_FOR_NOW, SHOW_FOR_3_DAYS, CLEAR_ALL_FORECAST } from "./types";
import {
    showWeatherForNowReducer,
    showWeatherFor3DaysReducer,
    clearAllForecastReducer,
} from "./reducers";
import { handleActions } from "redux-actions";

export const initialState = {
    posts: [],
    fetchedPosts: [],
};

export const postsReducer = handleActions(
    {
        [SHOW_FOR_NOW]: (state = initialState, action) => {
            return showWeatherForNowReducer(action.payload)
        },

        [SHOW_FOR_3_DAYS]: (state = initialState, action) => {
            return  showWeatherFor3DaysReducer(action.payload)
        },

        [CLEAR_ALL_FORECAST]: () => {
            return  clearAllForecastReducer()
        }

    },
    {}
);