import React, {Component, useState} from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import BigCalendar from 'react-big-calendar-like-google'
import moment from 'moment'
import * as dates from 'react-big-calendar-like-google/lib/css/react-big-calendar.css';
import {Button, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
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



export default function Routine() {
  const classes = useStyles();
  const [event, setEvent] = useState();
  return (
    <>
      <Grid container>
      <div className={classes.calendarGrid}>
        <BigCalendar
          //vybirani casu
          selectable
          step={160}
          timeslots={3}
          events={[]}
          formats={{
            timeGutterFormat: (date, culture, localizer) => {
              return getRoutineType(date, culture, localizer);
            }
          }}
        />
      </div>
      <div>
        <Button className={classes.createButton} variant="contained"
                href="#contained-buttons">
          <Typography>Create Routine</Typography>
        </Button>
      </div>
      </Grid>
    </>
  );
}