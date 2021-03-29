import React, {Component, useEffect, useState} from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import BigCalendar from 'react-big-calendar-like-google'
import moment from 'moment'
import * as dates from 'react-big-calendar-like-google/lib/css/react-big-calendar.css';
import {Button, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {sendData} from "../services/UserServices";
import {useHistory} from "react-router-dom";
import {getUsersRoutine} from "../services/CalendarServices";

BigCalendar.momentLocalizer(moment);
/*
const localizer = momentLocalizer(moment)
*/

// The component you should use instead the one you mentioned.
const useStyles = makeStyles((theme) => ({
  calendarGrid: {
    height: theme.spacing(60),
    width: theme.spacing(140),
    margin: theme.spacing(5),

    [theme.breakpoints.down('xs')]: {
      width: '90%',
      margin: theme.spacing(2.5)

    }
  },
  createButton: {
    margin: theme.spacing(5),
    backgroundColor: theme.palette.success.main,
    color: theme.palette.primary.contrastText
  }
}));
const getRoutineType = (date, culture, localizer) => {

  if (date.getHours() === 0) {
    return 'Morning';
  } else if (date.getHours() === 8) {
    return 'Evening';
  } else {
    return 'Other';
  }
};

const authGet = async () => {
  try {
    const x = await sendData();
    console.log(x.headers);
  } catch (err) {
    console.log(err);
  }
}

export default function Routine() {
  const classes = useStyles();
  const history = useHistory();

  const onClickCreateRoutine = () => {
    history.push('/create-routine');
  }
  const [event, setEvent] = React.useState([]);
  const events = [
    {
      id: 0,
      title: 'Board meeting',
      start: new Date(2021, 2, 29, 0, 0, 0),
      end: new Date(2021, 2, 29, 8, 0, 0),

    }, {
      id: 1,
      title: 'Other',
      start: new Date(2021, 2, 29, 16, 0, 0),
      end: new Date(2021, 2, 29, 23, 59, 0),

    },]

  const getRoutines = async () => {
    try {

      //27.03.2021 20:28:14
      //Mon Mar 29 2021 16:00:00 GMT+0200 (Středoevropský letní čas)
      const res = await getUsersRoutine();
      console.log("Calendar ", res.data);
      var a = res.data[1].date;
      var b= new Date(a)
      var test = new Date(b.getFullYear(), b.getMonth(), b.getDate(), 0, 0, 0);
      console.log('------',test);
      const x = res.data.map((e) => {
        console.log(e.routineType)
        if (e.routineType === "Morning") {
          var morning= new Date(e.date);
          return {
            id: e.routineId,
            title: e.routineType,
            start: new Date(morning.getFullYear(), morning.getMonth(), morning.getDate(), 0, 0, 0),
            end: new Date(morning.getFullYear(), morning.getMonth(), morning.getDate(), 8, 0, 0),
          }
        }else if(e.routineType === "Evening"){
          var evening= new Date(e.date);
          return {
            id: e.routineId,
            title: e.routineType,
            start: new Date(evening.getFullYear(), evening.getMonth(), evening.getDate(), 16, 0, 0),
            end: new Date(evening.getFullYear(), evening.getMonth(), evening.getDate(), 23, 50, 0),
          }
        }else{
          var other= new Date(e.date);
          return {
            id: e.routineId,
            title: e.routineType,
            start: new Date(other.getFullYear(), other.getMonth(), other.getDate(), 8, 0, 0),
            end: new Date(other.getFullYear(), other.getMonth(), other.getDate(), 16, 0, 0),
          }
        }
      })

      setEvent(x);

    } catch (e) {
      console.log(e, "Get routines in calendar error")
    }
  }

  useEffect(() => {
    // vola se vzdycky pri renderovani a pouze jednou
    getRoutines();

  }, []);
  return (
    <>
      <button onClick={authGet}>test</button>
      <Grid container>
        <div className={classes.calendarGrid}>
          <BigCalendar
            //vybirani casu
            selectable
            step={160}
            timeslots={3}
            events={event}
            onSelectEvent={event => alert(event.title)}

            formats={{
              timeGutterFormat: (date, culture, localizer) => {
                return getRoutineType(date, culture, localizer);
              }
            }}

          />
        </div>
        <div>
          <Button className={classes.createButton} variant="contained"
                  href="#contained-buttons" onClick={onClickCreateRoutine}>
            <Typography>Create Routine</Typography>
          </Button>
          <Button

            variant="contained"
            color="primary"
            href="#contained-buttons"
            type="submit"

          >
            Export
          </Button>
        </div>
      </Grid>
    </>
  );
}
