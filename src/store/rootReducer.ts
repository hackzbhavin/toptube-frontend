import { combineReducers } from "@reduxjs/toolkit";
// slices
import videoSlice from "./slice/videoSlice";


const rootReducer = combineReducers({
  videos: videoSlice,
});

export default rootReducer;
