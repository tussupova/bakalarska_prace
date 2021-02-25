namespace SkinCareDiary.Services.Models
{
    public class DtoRoutineType
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public bool EveningRoutine()
        {
            if (this.Name == "Morning")
            {
                return false;
            }
            return true;
        }

        public bool MorningRoutine()
        {
            if (this.Name == "Evening")
            {
                return false;
            }

            return true;
        }

    }
}