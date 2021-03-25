﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SkinCareDiary.Database.DB;

namespace SkinCareDiary.Database.Migrations
{
    [DbContext(typeof(RepositoryContext))]
    [Migration("20210312131351_PhotosTabelChange")]
    partial class PhotosTabelChange
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.3");

            modelBuilder.Entity("SkinCareDiary.Database.DB.Indicator", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime");

                    b.Property<int>("IndicatorTypeId")
                        .HasColumnType("int");

                    b.Property<int>("RoutineId")
                        .HasColumnType("int");

                    b.Property<float>("Value")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.HasIndex("IndicatorTypeId");

                    b.HasIndex("RoutineId");

                    b.ToTable("Indicators");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.IndicatorType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("IndicatorTypes");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.Note", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Date")
                        .HasColumnType("text");

                    b.Property<int>("RoutineId")
                        .HasColumnType("int");

                    b.Property<string>("Text")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("RoutineId");

                    b.ToTable("Notes");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.Photo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Date")
                        .HasColumnType("text");

                    b.Property<int>("RoutineId")
                        .HasColumnType("int");

                    b.Property<string>("Url")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("RoutineId");

                    b.ToTable("Photos");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Brand")
                        .HasColumnType("text");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<int>("ProductTypeId")
                        .HasColumnType("int");

                    b.Property<int>("RoutineId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ProductTypeId");

                    b.HasIndex("RoutineId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.ProductType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("ProductTypes");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.Routine", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("RoutineDateId")
                        .HasColumnType("int");

                    b.Property<int>("TypeOfRoutineId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("RoutineDateId");

                    b.HasIndex("TypeOfRoutineId");

                    b.HasIndex("UserId");

                    b.ToTable("Routines");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.RoutineDate", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime?>("End")
                        .HasColumnType("datetime");

                    b.Property<bool>("Fri")
                        .HasColumnType("tinyint(1)");

                    b.Property<bool>("Mon")
                        .HasColumnType("tinyint(1)");

                    b.Property<bool>("Sat")
                        .HasColumnType("tinyint(1)");

                    b.Property<DateTime>("Start")
                        .HasColumnType("datetime");

                    b.Property<bool>("Sun")
                        .HasColumnType("tinyint(1)");

                    b.Property<bool>("Thu")
                        .HasColumnType("tinyint(1)");

                    b.Property<bool>("Tue")
                        .HasColumnType("tinyint(1)");

                    b.Property<bool>("Wed")
                        .HasColumnType("tinyint(1)");

                    b.HasKey("Id");

                    b.ToTable("Dates");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.TypeOfRoutine", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("TypOfRoutines");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("BirthDay")
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("Gender")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<byte[]>("Password")
                        .HasColumnType("varbinary(4000)");

                    b.Property<byte[]>("Salt")
                        .HasColumnType("varbinary(4000)");

                    b.Property<string>("SkinType")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.Indicator", b =>
                {
                    b.HasOne("SkinCareDiary.Database.DB.IndicatorType", "IndicatorType")
                        .WithMany("Indicators")
                        .HasForeignKey("IndicatorTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SkinCareDiary.Database.DB.Routine", "Routine")
                        .WithMany("Indicators")
                        .HasForeignKey("RoutineId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("IndicatorType");

                    b.Navigation("Routine");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.Note", b =>
                {
                    b.HasOne("SkinCareDiary.Database.DB.Routine", "Routine")
                        .WithMany("Notes")
                        .HasForeignKey("RoutineId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Routine");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.Photo", b =>
                {
                    b.HasOne("SkinCareDiary.Database.DB.Routine", "Routine")
                        .WithMany("Photos")
                        .HasForeignKey("RoutineId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Routine");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.Product", b =>
                {
                    b.HasOne("SkinCareDiary.Database.DB.ProductType", "ProductType")
                        .WithMany("Products")
                        .HasForeignKey("ProductTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SkinCareDiary.Database.DB.Routine", "Routine")
                        .WithMany("Products")
                        .HasForeignKey("RoutineId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ProductType");

                    b.Navigation("Routine");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.Routine", b =>
                {
                    b.HasOne("SkinCareDiary.Database.DB.RoutineDate", "RoutineDate")
                        .WithMany("Routines")
                        .HasForeignKey("RoutineDateId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SkinCareDiary.Database.DB.TypeOfRoutine", "TypeOfRoutine")
                        .WithMany("Routines")
                        .HasForeignKey("TypeOfRoutineId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SkinCareDiary.Database.DB.User", "User")
                        .WithMany("Routines")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("RoutineDate");

                    b.Navigation("TypeOfRoutine");

                    b.Navigation("User");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.IndicatorType", b =>
                {
                    b.Navigation("Indicators");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.ProductType", b =>
                {
                    b.Navigation("Products");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.Routine", b =>
                {
                    b.Navigation("Indicators");

                    b.Navigation("Notes");

                    b.Navigation("Photos");

                    b.Navigation("Products");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.RoutineDate", b =>
                {
                    b.Navigation("Routines");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.TypeOfRoutine", b =>
                {
                    b.Navigation("Routines");
                });

            modelBuilder.Entity("SkinCareDiary.Database.DB.User", b =>
                {
                    b.Navigation("Routines");
                });
#pragma warning restore 612, 618
        }
    }
}
