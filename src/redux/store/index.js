import { configureStore, combineReducers } from "@reduxjs/toolkit";
import MainReducer from "../reducers";
import currentSongReducer from "../reducers/currentSongReducer";

const combinedReducers = combineReducers({
  data: MainReducer,
  current: currentSongReducer,
});

const store = configureStore({
  reducer: combinedReducers,
});
export default store;
