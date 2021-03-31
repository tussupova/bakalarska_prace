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
