import { configureStore, combineReducers } from "@reduxjs/toolkit";
import MainReducer from "../reducers";
import currentSongReducer from "../reducers/currentSongReducer";
import PlaylistReducer from "../reducers/playlistReducer";

const combinedReducers = combineReducers({
  data: MainReducer,
  current: currentSongReducer,
  playlist: PlaylistReducer,
});

const store = configureStore({
  reducer: combinedReducers,
});
export default store;
