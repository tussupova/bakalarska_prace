using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using SkinCareDiary.Database.DB;
using SkinCareDiary.Services.Models;

namespace SkinCareDiary.Services.Helpers
{
    public class RoutineHelper : IRoutineHelper
    {
        private readonly RepositoryContext _context;

        public RoutineHelper(RepositoryContext context)
        {
            _context = context;
        }

        public int CreateRoutine(DtoNewRoutine routine, int userId)
        {
            var context = _context;

            int IdTypeOfId = routine.RoutineType switch
            {
                "Morning" => 1,
                "Evening" => 2,
                _ => 3
            };

            var newNote = new Note();
            newNote.Text = routine.Note;
            newNote.Date = routine.RoutineDate;
            var newRoutineDate = new RoutineDate();
            newRoutineDate.Start = routine.RoutineDate;
            if (routine.RoutineEndDate == null)
            {
                newRoutineDate.End = routine.RoutineDate;
            }

            if (routine.RoutineEndDate != null)
            {
                newRoutineDate.End = routine.RoutineEndDate.Value;
            }


            if (routine.DayOfWeek != null)
            {
                newRoutineDate.Mon = routine.DayOfWeek["mon"];
                newRoutineDate.Tue = routine.DayOfWeek["tue"];
                newRoutineDate.Wed = routine.DayOfWeek["wed"];
                newRoutineDate.Thu = routine.DayOfWeek["thu"];
                newRoutineDate.Fri = routine.DayOfWeek["fri"];
                newRoutineDate.Sat = routine.DayOfWeek["sat"];
                newRoutineDate.Sun = routine.DayOfWeek["sun"];
            }
            else
            {
                newRoutineDate = null;
            }


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
            newRoutine.UserId = userId;
            newRoutine.RoutineDate = newRoutineDate;
            newRoutine.Indicators = new List<Indicator>();
            newRoutine.Indicators.Add(waterIndicator);
            newRoutine.Indicators.Add(stressIndicator);
            if (sleepingIndicator != null)
            {
                newRoutine.Indicators.Add(sleepingIndicator);
            }

            context.Routines.Add(newRoutine);
            context.SaveChanges();
            AddProduct(routine.Cleanser, 1, newRoutine.Id);
            AddProduct(routine.Treatment, 2, newRoutine.Id);
            AddProduct(routine.Moisturizer, 3, newRoutine.Id);
            AddProduct(routine.SunScreen, 4, newRoutine.Id);
            AddProduct(routine.Other, 5, newRoutine.Id);
            return newRoutine.Id;
        }

        public void AddProduct(List<DtoProductsFromNewRoutine> products, int productTypeId, int routineId)
        {
            if (products == null) return;
            using (var db = new RepositoryContext())
            {
                foreach (var product in products)
                {
                    
                        var newProduct = new Shelf();
                        newProduct.AllProductsId = product.Id;
                        newProduct.RoutineId = routineId;
                        newProduct.ProductTypeId = productTypeId;
                        db.Shelves.Add(newProduct);
                        db.SaveChanges();
                    
                }
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

        public DtoGetRoutine GetEditRoutine(string routineType, DateTime routineDate, int userId)
        {
            int routineTypeId = routineType switch
            {
                "Morning" => 1,
                "Evening" => 2,
                _ => 3
            };
            var newDate = routineDate.AddDays(1);

            var x = _context.Routines
                .Where(o => o.UserId == userId)
                .Where(o => (o.RoutineDate.Start == o.RoutineDate.End &&
                             (o.RoutineDate.Start >= routineDate && o.RoutineDate.End <= newDate))
                            || (o.RoutineDate.Start <= routineDate && o.RoutineDate.End >= newDate))
                .OrderByDescending(o => o.RoutineDate.Start)
                .FirstOrDefault();

            var note = _context.Notes.Where(o => o.Date <= newDate && o.Date >= routineDate)
                .Select(o => o.Text).FirstOrDefault();
            var stress = _context.Indicators.Where(o => o.IndicatorTypeId == 2)
                .Where(o => o.Date <= newDate && o.Date >= routineDate).Select(o => o.Value).FirstOrDefault();
            var water = _context.Indicators.Where(o => o.IndicatorTypeId == 1)
                .Where(o => o.Date <= newDate && o.Date >= routineDate).Select(o => o.Value).FirstOrDefault();
            var sleep = _context.Indicators.Where(o => o.IndicatorTypeId == 3)
                .Where(o => o.Date <= newDate && o.Date >= routineDate).Select(o=>o.Value).FirstOrDefault();
            var stressType = stress switch
            {
                1 => "happy",
                2 => "normal",
                _ => "bad"
            };
            var dbCleanser = _context.Shelves
                .Include(o => o.AllProducts)
                .Where(o => o.RoutineId == x.Id)
                .Where(o => o.ProductTypeId == 1)
                .ToList();
            var dbTreatment=_context.Shelves
                .Include(o => o.AllProducts)
                .Where(o => o.RoutineId == x.Id)
                .Where(o => o.ProductTypeId == 2)
                .ToList();
            var dbMoisturizer=_context.Shelves                
                .Include(o => o.AllProducts)
                .Where(o => o.RoutineId == x.Id)
                .Where(o => o.ProductTypeId == 3)
                .ToList();
            var dbSunscreen=_context.Shelves
                .Include(o => o.AllProducts)
                .Where(o => o.RoutineId == x.Id)
                .Where(o => o.ProductTypeId == 4)
                .ToList();
            var dbOther=_context.Shelves                
                .Include(o => o.AllProducts)
                .Where(o => o.RoutineId == x.Id)
                .Where(o => o.ProductTypeId == 5)
                .ToList();
            
            List<DtoProductsFromNewRoutine> cleanser = null;
            if(dbCleanser.Count!=0){            
               cleanser = dbCleanser
                    .Select(product => new DtoProductsFromNewRoutine() 
                        {Name = product.AllProducts.Brand + ' ' 
                                                          + product.AllProducts.Name, 
                            Id = product.AllProducts.Id}).ToList();
            }
            List<DtoProductsFromNewRoutine> moisturizer= null;;
            if (dbMoisturizer.Count != 0)
            {
                moisturizer = dbMoisturizer.Select(product => new DtoProductsFromNewRoutine()
                    {
                        Name = product.AllProducts.Brand + ' ' + product.AllProducts.Name, Id = product.AllProducts.Id
                    })
                    .ToList();
            }
            List<DtoProductsFromNewRoutine> treatment= null;;
            if (dbTreatment.Count != 0)
            {
                treatment = dbTreatment.Select(product => new DtoProductsFromNewRoutine()
                    {
                        Name = product.AllProducts.Brand + ' ' + product.AllProducts.Name, Id = product.AllProducts.Id
                    })
                    .ToList();
            }
            List<DtoProductsFromNewRoutine> sunScreen= null;;
            if (dbSunscreen.Count != 0)
            {
                sunScreen = dbSunscreen.Select(product => new DtoProductsFromNewRoutine()
                    {
                        Name = product.AllProducts.Brand + ' ' + product.AllProducts.Name, Id = product.AllProducts.Id
                    })
                    .ToList();
            }
            List<DtoProductsFromNewRoutine> other= null;;
            if (dbOther.Count != 0)
            {
                other = dbOther.Select(product => new DtoProductsFromNewRoutine()
                    {
                        Name = product.AllProducts.Brand + ' ' + product.AllProducts.Name, Id = product.AllProducts.Id
                    })
                    .ToList();
            }

            var routine = new DtoGetRoutine()
            {
                RoutineType = routineType,
                Note = note,
                Stress = stressType,
                Water = water,
                RoutineDate = routineDate,
                Cleanser =  cleanser,
                Treatment = treatment,
                Moisturizer = moisturizer,
                SunScreen = sunScreen,
                Other = other,
                Sleep = sleep,

            };


            return routine; 
        }

        private void AddToList(List<DtoProductsFromNewRoutine> list)
        {
        }
    }
}