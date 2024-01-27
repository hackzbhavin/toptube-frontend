
import axios from "axios";
import constants from "../constants";
import { store } from "../store/store";
import { setVideoList } from "../store/slice/videoSlice";


const getAllVideos = async () => {


  try {
    const apiUrl = constants.backend_url + constants.api_get_allvideos;

    const response = await axios.get(apiUrl);

    if (response?.data?.success)
    {
        
        store.dispatch(setVideoList(response?.data?.allVideos));

    }

   
  } catch (error) {
    console.error("Error fetching YouTube video metadata:", error);
  }
};

export default getAllVideos;
