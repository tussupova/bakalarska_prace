import axios from "axios";

export function uploadPhotosAsync(photos, {routineId}) {
  const formData = new FormData();
  for (const f of photos.photos) {
    formData.append("files", f);
  }
  debugger
  //todo change routineId
  formData.append("routineId", routineId);
  formData.append("date", new Date().toISOString());
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  };
  return axios.post("https://localhost:5001/photo/upload", formData, config);
}

//todo change routine ID
export function downloadPhotosInfoAsync() {
  return axios.get(
    "https://localhost:5001/photo/getPhotosInfo/9",{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
    }
  );
}
//todo change photo id
export function downloadPhoto() {
  return axios.get("https://localhost:5001/photo/getPhotosFromId/1", {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
  });
}
