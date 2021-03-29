using System;

namespace SkinCareDiary.Services.Models
{
    public class DtoGetUsersRoutine
    {

        public int RoutineId { get; set; }
        public string RoutineType { get; set; }
        
        public DateTime Date { get; set; }
    }
}