import axios from "axios";

export function uploadPhotosAsyc(photos) {
  return axios.post("https://localhost:5001/photos/upload", { photos });
}
