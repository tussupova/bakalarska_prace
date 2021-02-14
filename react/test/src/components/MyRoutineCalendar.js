import React, {Component} from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Calendar, momentLocalizer} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import * as dates from 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

// The component you should use instead the one you mentioned.
const useStyles = makeStyles((theme) => ({
  calendarGrid: {
    height: theme.spacing(60)
  },
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
  return (
    <>
      <div className={classes.calendarGrid}>
        <Calendar
          localizer={localizer}
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
    </>
  );
}
