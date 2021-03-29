import axios from "axios";

export function exportData() {
  return axios.post("https://localhost:5001/calendar/exportData", {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
  })
}
export function getUsersRoutine(){
  return axios.get("https://localhost:5001/calendar/getRoutines",{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
  })
}
