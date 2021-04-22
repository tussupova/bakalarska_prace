import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  setButton: {
    margin: theme.spacing(3),
  },
  weekCheckBox: {
    margin: "0",
  },
  gridForDate: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelInGrid: {
    padding: theme.spacing(4),
  },
  inputForNumber: {
    padding: theme.spacing(2),
  },
}));
export default function SetPeriod(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
        className={classes.setButton}
      >
        <Typography>Set Repeat</Typography>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Set recurrence</DialogTitle>
        <DialogContent>
          <Grid container className={classes.gridForDate}>
            <div>
              <Typography className={classes.labelInGrid}>
                Amout of week
              </Typography>
            </div>
            <div className={classes.inputForNumber}>
              <FormControl>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  type="number"
                  fullWidth
                  value={props.value.AmountOfWeek}
                  onChange={props.onChangeAmountOfWeek}
                />
              </FormControl>
            </div>
          </Grid>
          <div>
            <Grid container className={classes.gridForDate}>
              <div>
                <Typography className={classes.labelInGrid}>
                  {" "}
                  Repeat on
                </Typography>
              </div>
              <div>
                <FormControl component="fieldset">
                  {/*<FormLabel component="legend">Repeat on</FormLabel>*/}
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          checked={props.valueDayOfWeek.mon}
                          onChange={props.onChangeDayOfWeek}
                          name="mon"
                        />
                      }
                      label="Mon"
                      labelPlacement="top"
                      className={classes.weekCheckBox}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          checked={props.valueDayOfWeek.tue}
                          onChange={props.onChangeDayOfWeek}
                          name="tue"
                        />
                      }
                      label="Tue"
                      labelPlacement="top"
                      className={classes.weekCheckBox}
                    />{" "}
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          checked={props.valueDayOfWeek.wed}
                          onChange={props.onChangeDayOfWeek}
                          name="wed"
                        />
                      }
                      label="Wed"
                      labelPlacement="top"
                      className={classes.weekCheckBox}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          checked={props.valueDayOfWeek.thu}
                          onChange={props.onChangeDayOfWeek}
                          name="thu"
                        />
                      }
                      label="Thu"
                      labelPlacement="top"
                      className={classes.weekCheckBox}
                    />{" "}
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          checked={props.valueDayOfWeek.fri}
                          onChange={props.onChangeDayOfWeek}
                          name="fri"
                        />
                      }
                      label="Fri"
                      labelPlacement="top"
                      className={classes.weekCheckBox}
                    />{" "}
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          checked={props.valueDayOfWeek.sat}
                          onChange={props.onChangeDayOfWeek}
                          name="sat"
                        />
                      }
                      label="Sat"
                      labelPlacement="top"
                      className={classes.weekCheckBox}
                    />{" "}
                    <FormControlLabel
                      name="DayOfWeek"
                      control={
                        <Checkbox
                          color="primary"
                          checked={props.valueDayOfWeek.sun}
                          onChange={props.onChangeDayOfWeek}
                          name="sun"
                        />
                      }
                      label="Sun"
                      labelPlacement="top"
                      className={classes.weekCheckBox}
                    />
                  </FormGroup>
                </FormControl>
              </div>
            </Grid>
          </div>

          <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container className={classes.gridForDate}>
                <div>
                  <Typography className={classes.labelInGrid}>
                    {" "}
                    Ends on
                  </Typography>
                </div>
                <div>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={props.value.EndDate}
                    onChange={props.onChangeEndDate}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </div>
              </Grid>
            </MuiPickersUtilsProvider>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
