import axios from "axios";

export function exportData() {
  return axios.post("https://localhost:5001/product/exportData", {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
  })
}
