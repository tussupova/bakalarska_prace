using System;
using System.Collections.Generic;
using System.Globalization;
using Microsoft.EntityFrameworkCore;
using SkinCareDiary.Services.Helpers;
using SkinCareDiary.Services.Models;
using Xunit;

namespace SkinCareDiary.Tests
{
    public class RoutineManagerTest
    {
        [Fact]
        public void CreateRoutineTest()
        {
            var optionsBuilder = new DbContextOptionsBuilder<TestRepositoryContext>();
            optionsBuilder.UseInMemoryDatabase("loginManagerTestDb");
            using var context = new TestRepositoryContext(optionsBuilder.Options);
            var routine = new RoutineHelper(context);
            
            
       
        List<DtoProductsFromNewRoutine> cleanser = new List<DtoProductsFromNewRoutine>();
        var avon = new DtoProductsFromNewRoutine()
        {
            Id = 1,
            Name = "Avon"
        };
        cleanser.Add(avon);
        List<DtoProductsFromNewRoutine> treatment = new List<DtoProductsFromNewRoutine>();
        var ordinary = new DtoProductsFromNewRoutine()
        {
            Id = 5,
            Name = "Ordinary"
        };
        treatment.Add(ordinary);
        var inkeyList = new DtoProductsFromNewRoutine()
        {
            Id = 6,
            Name = "InkeyList"
        };
        treatment.Add(inkeyList);
       
        List<DtoProductsFromNewRoutine> other = new List<DtoProductsFromNewRoutine>();
        var balea = new DtoProductsFromNewRoutine()
        {
            Id = 2,
            Name = "Balea"
        };
   
        other.Add(balea);
        var ticks = new DateTime(2021, 07, 28, 22, 35, 5,
            new CultureInfo("en-US", false).Calendar).Ticks;
        DateTime routineDate = new DateTime(ticks);
        /*public string RoutineType { get; set; }
        public string Note { get; set; }
        public List<string> Photos { get; set; }
        public string Stress { get; set; }
        public float Water { get; set; }
        public DateTime? GoToSleep { get; set; }
        public DateTime? WakeUp { get; set; }
        public DateTime RoutineDate { get; set; }
        public DateTime? RoutineEndDate { get; set; }
        public Dictionary<string, bool> DayOfWeek { get; set; }
        public int AmountOfWeek { get; set; }
        
        public List<DtoProductsFromNewRoutine> Cleanser { get; set; }
        public List<DtoProductsFromNewRoutine> Treatment { get; set; }
        public List<DtoProductsFromNewRoutine> Moisturizer { get; set; }
        public List<DtoProductsFromNewRoutine> SunScreen { get; set; }
        public List<DtoProductsFromNewRoutine> Other { get; set; }*/

        var dtoRoutine = new DtoNewRoutine()
        {
            RoutineType = "Morning",
            Note = "Note",
            Photos = null,
            RoutineDate = routineDate,
            Cleanser = cleanser,
            Treatment = treatment,
            Other = other, 
            Stress = "bad",
            Water = 3,
            GoToSleep = null,
            WakeUp = null,
            AmountOfWeek = 0,
            SunScreen = null,
            RoutineEndDate = null,
            DayOfWeek = null,
            Moisturizer = null,
            
        };
        var pokus = routine.CreateRoutine(dtoRoutine, 1);
        Assert.Equal(1,routine.CreateRoutine(dtoRoutine, 1));
        }
    }
}