import axios from "axios";
import {API_DEFAULT} from "../constants";


export function createRoutineAsync({
  routineType,
  note,
  photos,
  stress,
  water,
  goToSleep,
  wakeUp,
  routineDate,
  amountOfWeek,
  routineEndDate,
  dayOfWeek,
  cleanser,
  treatment,
  moisturizer,
  sunscreen,
  other
}) {
  return axios.post(
    API_DEFAULT + "/routine/createRoutine",
    {
      routineType,
      note,
      photos,
      stress,
      water,
      goToSleep,
      wakeUp,
      routineDate,
      amountOfWeek,
      routineEndDate,
      dayOfWeek,
      cleanser,
      treatment,
      moisturizer,
      sunscreen,
      other
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    }
  );
}


export function editRoutineAsync({
  note,
  stress,
  water,
  goToSleep,
  wakeUp,
  routineDate,
  cleanser,
  treatment,
  moisturizer,
  sunscreen,
  other,
  routineId
}) {
  return axios.put(
    API_DEFAULT + "/routine/editRoutine/" + routineId,
    {
      note,
      stress,
      water,
      goToSleep,
      wakeUp,
      routineDate,
      cleanser,
      treatment,
      moisturizer,
      sunscreen,
      other
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    }
  );
}

export function getEditRoutine({routineType, date}){
  return axios.get(API_DEFAULT + "/routine/editRoutine", {
    params: {
      routineType: routineType,
      routineDate: date
    },
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
  })
}
