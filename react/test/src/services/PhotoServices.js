import axios from "axios";
import {API_DEFAULT} from "../constants";

export function uploadPhotosAsync(photos, {routineId}) {
  const formData = new FormData();
  for (const f of photos.photos) {
    formData.append("files", f);
  }

  formData.append("routineId", routineId);
  formData.append("date", new Date().toISOString());
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  };
  return axios.post(API_DEFAULT + "/photo/upload", formData, config);
}

//todo change routine ID
export function downloadPhotosInfoAsync() {
  return axios.get(
    API_DEFAULT + "/photo/getPhotosInfo",{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
    }
  );
}

export function deletePhotos(id){
  return axios.delete(
    API_DEFAULT + "/photo/"+id,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
    }
  )
}
