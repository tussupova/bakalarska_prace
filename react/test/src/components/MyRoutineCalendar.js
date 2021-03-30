import React, { Component, useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import BigCalendar from "react-big-calendar-like-google";
import moment from "moment";
import * as dates from "react-big-calendar-like-google/lib/css/react-big-calendar.css";
import { Button, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { sendData } from "../services/UserServices";
import { useHistory } from "react-router-dom";
import { getUsersRoutine } from "../services/CalendarServices";

BigCalendar.momentLocalizer(moment);
/*
const localizer = momentLocalizer(moment)
*/

// The component you should use instead the one you mentioned.
const useStyles = makeStyles((theme) => ({
  calendarGrid: {
    height: theme.spacing(64),
    width: theme.spacing(170),
    margin: theme.spacing(2),

    [theme.breakpoints.down("xs")]: {
      width: "90%",
      margin: theme.spacing(2.5),
    },
  },
  createButton: {
    margin: theme.spacing(5),
    backgroundColor: theme.palette.success.main,
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      marginLeft: theme.spacing(1)
    },
  },
  exportButton:{
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  buttonsGrid:{
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center"
    },
  }
}));
const getRoutineType = (date, culture, localizer) => {
  if (date.getHours() === 0) {
    return "Morning";
  } else if (date.getHours() === 8) {
    return "Evening";
  } else {
    return "Other";
  }
};

const authGet = async () => {
  try {
    const x = await sendData();
    console.log(x.headers);
  } catch (err) {
    console.log(err);
  }
};

export default function Routine() {
  const classes = useStyles();
  const history = useHistory();

  const onClickCreateRoutine = () => {
    history.push("/create-routine");
  };
  const [event, setEvent] = React.useState([]);

  const getRoutines = async () => {
    try {
      //27.03.2021 20:28:14
      //Mon Mar 29 2021 16:00:00 GMT+0200 (Středoevropský letní čas)
      const res = await getUsersRoutine();
      console.log("Calendar ", res.data);
      var a = res.data[1].date;
      var b = new Date(a);
      var test = new Date(b.getFullYear(), b.getMonth(), b.getDate(), 0, 0, 0);
      console.log("------", test);
      const x = res.data.map((e) => {
        console.log(e.routineType);
        if (e.routineType === "Morning") {
          var morning = new Date(e.date);
          return {
            id: e.routineId,
            title: e.routineType,
            start: new Date(
              morning.getFullYear(),
              morning.getMonth(),
              morning.getDate(),
              0,
              0,
              0
            ),
            end: new Date(
              morning.getFullYear(),
              morning.getMonth(),
              morning.getDate(),
              8,
              0,
              0
            ),
          };
        } else if (e.routineType === "Evening") {
          var evening = new Date(e.date);
          return {
            id: e.routineId,
            title: e.routineType,
            start: new Date(
              evening.getFullYear(),
              evening.getMonth(),
              evening.getDate(),
              16,
              0,
              0
            ),
            end: new Date(
              evening.getFullYear(),
              evening.getMonth(),
              evening.getDate(),
              23,
              50,
              0
            ),
          };
        } else {
          var other = new Date(e.date);
          return {
            id: e.routineId,
            title: e.routineType,
            start: new Date(
              other.getFullYear(),
              other.getMonth(),
              other.getDate(),
              8,
              0,
              0
            ),
            end: new Date(
              other.getFullYear(),
              other.getMonth(),
              other.getDate(),
              16,
              0,
              0
            ),
          };
        }
      });

      setEvent(x);
    } catch (e) {
      console.log(e, "Get routines in calendar error");
    }
  };

  useEffect(() => {
    // vola se vzdycky pri renderovani a pouze jednou
    getRoutines();
  }, []);

  return (
    <>
      <Grid container justify="center">
        <Grid container xs="12" sm="10" lg="10" className={classes.buttonsGrid}>
          <Button
            className={classes.createButton}
            variant="contained"
            href="#contained-buttons"
            onClick={onClickCreateRoutine}
          >
            <Typography>Create Routine</Typography>
          </Button>
          <Button
            color="primary"
            className={classes.exportButton}
            variant="contained"
            href="#contained-buttons"
            onClick={onClickCreateRoutine}
          >
            <Typography>Export</Typography>
          </Button>
        </Grid>
        <Grid item className={classes.calendarGrid}>
          <BigCalendar
            //vybirani casu
            selectable
            step={160}
            timeslots={3}
            events={event}
            onSelectEvent={(event) => alert(event.title)}
            label={event.title}
            eventPropGetter={(event) => ({
              style: {
                backgroundColor: "#F4966C",
                border: "none",
              },
            })}
            formats={{
              timeGutterFormat: (date, culture, localizer) => {
                return getRoutineType(date, culture, localizer);
              },
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
