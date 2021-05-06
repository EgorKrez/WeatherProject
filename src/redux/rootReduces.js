import { combineReducers } from "redux";
import { forecastReducer } from "./forecastsReduces";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  forecasts: forecastReducer,
  loading: false,
  isShowAlert: false,
  currentCity: "London",
  forecastTime: "For Now",
  unit: "C",
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
