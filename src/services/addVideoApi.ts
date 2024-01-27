import axios from "axios";
import constants from "../constants";

const addVideoApi = async (data: any) => {
  try {
    const apiUrl = constants.backend_url + constants.api_post_addvideo;

    const response = await axios.post(apiUrl, data);

    if (response?.status === 200) {
      console.log("====================================");
      console.log(response);
      console.log("====================================");
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error adding video", error);
  }
};

export default addVideoApi;
