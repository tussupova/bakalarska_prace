import axios from "axios";
import {API_DEFAULT} from "../constants";

export function exportData() {
  return axios.post(API_DEFAULT + "/calendar/exportData", {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
    responseType: 'blob',

  })
}
export function getUsersRoutine(){
  return axios.get(API_DEFAULT + "/calendar/getRoutines",{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
  })
}
