import axios from "axios";

export function uploadPhotosAsync(photos) {
  const formData = new FormData();
  for(const f of photos.photos) {
    formData.append('files', f);
  }
  formData.append('userId', 8);
  formData.append('routineId', 3);
  formData.append('date', new Date().toISOString());
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  return axios.post("https://localhost:5001/photo/upload", formData,
    config)
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

