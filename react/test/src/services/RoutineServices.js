import axios from "axios";


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
    "https://localhost:5001/routine/createRoutine",
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

export function getEditRoutine({routineType, date}){
  return axios.get("https://localhost:5001/routine/editRoutine", {
    params: {
      routineType: routineType,
      routineDate: date
    },
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
  })
}
