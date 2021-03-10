using System;
using System.Collections.Generic;
using System.Globalization;
using SkinCareDiary.Database.DB;
using SkinCareDiary.Services.Models;

namespace SkinCareDiary.Services.Helpers
{
    public class RoutineHelper : IRoutineHelper
    {
        public DtoNewRoutine CreateRoutine(DtoNewRoutine routine)
        {
            using (var context = new RepositoryContext())
            {
                int IdTypeOfId = routine.RoutineType switch
                {
                    "Morning" => 1,
                    "Evening" => 2,
                    _ => 3
                };

                var newNote = new Note();
                newNote.Text = routine.Note;

                var newRoutineDate = new RoutineDate();
                newRoutineDate.Start = routine.RoutineDate;
                newRoutineDate.End = routine.RoutineEndDate;
                newRoutineDate.Mon = routine.DayOfWeek["mon"];
                newRoutineDate.Tue = routine.DayOfWeek["tue"];
                newRoutineDate.Wed = routine.DayOfWeek["wed"];
                newRoutineDate.Thu = routine.DayOfWeek["thu"];
                newRoutineDate.Fri = routine.DayOfWeek["fri"];
                newRoutineDate.Sat = routine.DayOfWeek["sat"];
                newRoutineDate.Sun = routine.DayOfWeek["sun"];

                var waterIndicator = new Indicator();
                waterIndicator.Date = routine.RoutineDate;
                waterIndicator.Value = routine.Water;
                waterIndicator.IndicatorTypeId = 1;

                var stressIndicator = new Indicator();
                stressIndicator.Date = routine.RoutineDate;
                stressIndicator.Value = routine.Stress switch
                {
                    "bad" => 3,
                    "normal" => 2,
                    _ => 1
                };
                stressIndicator.IndicatorTypeId = 2;

                var sleepingIndicator = new Indicator();
                sleepingIndicator.Date = routine.RoutineDate;
                var x = routine.WakeUp - routine.GoToSleep;
                var sleeping = x?.TotalHours;

                if (sleeping != null) sleepingIndicator.Value = (float) (sleeping);
                sleepingIndicator.IndicatorTypeId = 3;

                var newRoutine = new Routine();
                newRoutine.TypeOfRoutineId = IdTypeOfId;
                newRoutine.Notes = new List<Note>();
                newRoutine.Notes.Add(newNote);
                newRoutine.UserId = 8;
                newRoutine.RoutineDate = newRoutineDate;
                newRoutine.Indicators = new List<Indicator>();
                newRoutine.Indicators.Add(waterIndicator);
                newRoutine.Indicators.Add(stressIndicator);
                newRoutine.Indicators.Add(sleepingIndicator);
                

                context.Routines.Add(newRoutine);
                context.SaveChanges();
                return routine;
            }
        }

        public DtoNewRoutine MapRoutineToDtoCreateRoutine(Routine routine)
        {
            var dtoRoutine = new DtoNewRoutine()
            {
                /*User = routine.User,
                TypeOfRoutine = routine.TypeOfRoutine,
                RoutineDate = routine.RoutineDate,
                Products = routine.Products,
                Indicators = routine.Indicators,
                Photos = routine.Photos,
                Nodes = routine.Notes*/
            };
            return dtoRoutine;
        }
    }
}