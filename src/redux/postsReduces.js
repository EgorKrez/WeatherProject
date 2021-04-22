import { SHOW_FOR_NOW, SHOW_FOR_3_DAYS } from "./types";
import {
    showWeatherForNowReducer,
    showWeatherFor3DaysReducer,
} from "./reducers";
import { handleActions } from "redux-actions";

export const initialState = {
    posts: [],
    fetchedPosts: [],
};

export const postsReducer = handleActions(
    {
        [SHOW_FOR_NOW]: (state = initialState, action) => {
            console.log('show for now')
            return showWeatherForNowReducer(state, action.payload)
        },

        [SHOW_FOR_3_DAYS]: (state = initialState, action) => {
            console.log('show for 3 days')
            return  showWeatherFor3DaysReducer(state, action.payload)
        }

    },
    {}
);