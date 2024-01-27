import { createSlice } from "@reduxjs/toolkit";
import { VideoProps } from "../../components/Types";

const initialState: {
  videoList: VideoProps[];
} = {
  videoList: [],
};

const slice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setVideoList: (state, action) => {
      state.videoList = action.payload;
      state.videoList.sort((a, b) => b.estimatedEarning - a.estimatedEarning);
    },

    addVideo: (state, action) => {
      const newVideo = action?.payload;
      console.log("===================newVideo=================");
      console.log(newVideo);
      console.log("====================================");

      state.videoList.push(newVideo);

      state.videoList.sort((a, b) => b.estimatedEarning - a.estimatedEarning);
    },

    resetVideosSlice: () => {
      return initialState;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { addVideo, setVideoList, resetVideosSlice } = slice.actions;
