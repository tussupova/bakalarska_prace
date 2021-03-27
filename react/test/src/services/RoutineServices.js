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
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    }
  );
}
