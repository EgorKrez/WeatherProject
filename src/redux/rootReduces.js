import { combineReducers } from "redux";
import { postsReducer } from "./postsReduces";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    posts: postsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer