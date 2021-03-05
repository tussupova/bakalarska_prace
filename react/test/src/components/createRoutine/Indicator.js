import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Typography} from "@material-ui/core";
import MoodIcon from '@material-ui/icons/Mood';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import Slider from "@material-ui/core/Slider";
import {KeyboardTimePicker} from '@material-ui/pickers'


const useStyles = makeStyles((theme) => ({


  paper: {
    width: '90%',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  iconSize: {
    fontSize: theme.spacing(4),
    color: theme.palette.secondary.main

  }, waterSlider: {
    width: theme.spacing(35),
  },
  mainGrid: {
    width: theme.spacing(100),
    margin: theme.spacing(3)
  },
  sleep: {
    width: theme.spacing(20)
  },
  calendarWidth: {
    width: theme.spacing(30)
  }

}));

function valuetext(value) {
  return `${value} L`;
}

const marks = [
  {
    value: 0.5,
    label: '0,5 L',
  },
  {
    value: 2,
    label: '2 L',
  },
  {
    value: 3.5,
    label: '3,5 L',
  }
];
export default function Indicator(props) {

  const classes = useStyles();

  return (
    <Grid container className={classes.mainGrid} xs={12} lg={6}>
      <Grid item>
        <Paper className={classes.paper}>
          <div>
            <Typography>Stress</Typography>
            <FormControl component="fieldset">
              <RadioGroup row aria-label="position" name="Stress" defaultValue="top" value={props.value.Stress} onChange={props.onChange}>
                <FormControlLabel
                  value="happy"
                  name="Stress"
                  control={<Radio color="primary"/>}
                  label={<MoodIcon className={classes.iconSize}></MoodIcon>}
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="normal"
                  name="Stress"
                  control={<Radio color="primary"/>}
                  label={<SentimentSatisfiedIcon className={classes.iconSize}></SentimentSatisfiedIcon>}
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="bad"
                  name="Stress"
                  control={<Radio color="primary"/>}
                  label={<MoodBadIcon className={classes.iconSize}></MoodBadIcon>}
                  labelPlacement="bottom"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div name ="Water">
            <Typography>Water</Typography>
            <Slider className={classes.waterSlider}

                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={0.5}
                    marks={marks}
                    min={0.5}
                    max={3.5}
                    name="Water"
                    value={props.value.Water}
                    onChange={props.onChange}
                   onChangeCommitted={props.onChange}
            />
          </div>
          <div>
            <Typography>Sleeping</Typography>
            <Grid container justify="space-around">
              <KeyboardTimePicker
                margin="normal"
                id="go-to-sleep"
                label="Go To Sleep"
/*                value={props.value.GoToSleep}
                onChange={props.OnChange}*/
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="wake-up"
/*                value={props.value.WakeUp}
                onChange={props.OnChange}*/
                label="Wake Up"
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </Grid>

          </div>
        </Paper>
      </Grid>

    </Grid>
  );
}
