import axios from "axios";

export function uploadPhotosAsync(photos) {
  return axios.post("https://localhost:5001/photos/upload", { photos });
}
//todo change routine ID
export function downloadPhotosInfoAsync(){
  return axios.get("https://localhost:5001/photo/getPhotosInfo/3", /*{
    params:{
      routineId: 3
    }
  }*/)
}
//todo change photo id
export function downloadPhoto(){
  return axios.get("https://localhost:5001/photo/getPhotosFromId/1")
}

