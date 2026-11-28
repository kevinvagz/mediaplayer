import { serverurl } from "./serverUrl";
import { commonApi } from "./commonApi";

// api call for upload video

export const uploadVideo = async(reqBody)=>{
    return await commonApi('POST',`${serverurl}/videos`, reqBody)
    
}
