import React, {Component, useState} from "react";
import {Button} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import makeAnimated from "react-select/animated";
import SetPeriod from "../SetPeriod";
import Indicator from "./Indicator";
import NoteAndPhotos from "./NoteAndPhotos";
import ProductsOfRoutine from "./ProductsOfRoutine";
import Typography from "@material-ui/core/Typography";
import NewBDay from "../NewBDay";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from "@material-ui/icons/Home";
import {useForm} from "react-hook-form";
import {signUpAsync} from "../../services/UserServices";
import {createRoutineAsync} from "../../services/RoutineServices";
import {uploadPhotosAsync} from "../../services/PhotoServices";
import * as theme from "@material-ui/system";
import {useHistory} from "react-router-dom";
//import ImageUpload from './ui/imge-upload/ImageUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1 /*justify="center"
    alignItems="center"*/,
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
  },
  saveAndDelete: {
    margin: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-around",
    color: theme.palette.text.secondary,
    frozen: true,
  },
  actionGrid: {
    flexDirection: "row",
    paddingLeft: theme.spacing(11),
    paddingTop: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignContent: "center",
      paddingLeft: theme.spacing(0),
    },
  },
  selectDateCalendar: {
    width: "16%",
    margin: theme.spacing(0),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  titleRoutine: {
    color: theme.palette.primary.main
  },
  createButton: {
    color: theme.palette.getContrastText(theme.palette.error.main),
    background: theme.palette.error.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  saveColor: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.primary.contrastText,
  },
  marginAll: {
    paddingLeft: theme.spacing(5),
    backgroundColor: theme.palette.success.main,
    color: theme.palette.primary.contrastText,
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 150,
  },
  test: {
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  breadcrumbs: {
    padding: theme.spacing(2),
  },
  breadcrumbsFont: {
    fontSize: theme.spacing(1.8),
  },
  widthForSnack: {
    width: theme.spacing(50),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Routine() {
  const classes = useStyles();

  const [routineType, setRoutineType] = React.useState("Morning");
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [indicator, setIndicators] = useState({
    Water: "2",
    Stress: "normal",
    GoToSleep: null,
    WakeUp: null,
  });
  const [prod, setProd] = useState({
    Cleanser: [],
    Treatment: [],
    Moisturizer: [],
    Sunscreen: [],
    Other: []
  })
  const [repeater, setRepeater] = useState({
    AmountOfWeek: "",
    EndDate: null,
  });
  const [dayOfWeek, setDayOfWeek] = useState({
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false,
  });
  console.log(repeater);
  const [noteAndPhoto, setNoteAndPhoto] = useState({
    Note: "",
    Photos: [],
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const sendPhoto = async (routineId) => {
    try {
      const res = await uploadPhotosAsync(
        {
          photos: noteAndPhoto.Photos,
        },
        {routineId: routineId}
      );
      console.log("Photo was send");
    } catch (e) {
      console.log(e, "Photos error");
    }
  };

  const createRoutine = async () => {
    try {
      console.log(indicator, repeater);
      const response = await createRoutineAsync({
        routineType: routineType,
        note: noteAndPhoto.Note,
        stress: indicator.Stress,
        water: Number(indicator.Water),
        goToSleep: indicator.GoToSleep
          ? new Date(indicator.GoToSleep).toISOString()
          : null,
        wakeUp: indicator.WakeUp
          ? new Date(indicator.WakeUp).toISOString()
          : null,
        routineDate: new Date(selectedDate).toISOString(),
        amountOfWeek: Number(repeater.AmountOfWeek),
        routineEndDate: repeater.EndDate
          ? new Date(repeater.EndDate).toISOString()
          : null,
        dayOfWeek: dayOfWeek,
        cleanser: prod.Cleanser,
        treatment: prod.Treatment,
        moisturizer: prod.Moisturizer,
        sunscreen: prod.Sunscreen,
        other: prod.Other
      });
      await sendPhoto(response.data);
      alertClick();
    } catch (err) {
      console.log("my error catch", err);
    }
  };

  const [alertOpen, setAlertOpen] = useState(false);
  const alertClick = () => {
    setAlertOpen(true);
  };
  const alertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };
  const history = useHistory();

  function handleClick(event) {
    history.push("/my-routine");
  }

  const testXX = (event, value) => {

    console.log('ALL PROD', prod)
    console.log('Cleanser Id', prod.Cleanser[0])
  }

  function openAddProductDialog() {
  }

  /*  const PhotosApp = () => {
      const [files, setFiles] = useState<File[]>([]);

      const onDrop = (acceptedFiles: File[]) => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      }*/
  return (
    <>
      <Grid container>
        <Grid item className={classes.breadcrumbs} xs={12} sm={4}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="inherit"/>}
            aria-label="breadcrumb"
          >
            <Link color="inherit" href="/" onClick={handleClick} fontSize>
              <Typography className={classes.breadcrumbsFont}>
                <HomeIcon/>
              </Typography>
            </Link>
            <Link color="inherit" onClick={handleClick}>
              <Typography className={classes.breadcrumbsFont}>
                Routine
              </Typography>
            </Link>
            <Typography color="textPrimary" className={classes.breadcrumbsFont}>
              Create Routine
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid className={classes.root} item xs={12} sm={4} container>
          <Typography><h2 className={classes.titleRoutine}>Create Daily Routine </h2></Typography>
        </Grid>
        <Grid className={classes.root} item xs={12} sm={4} container>
          <Button
            //`${this.state.className} ${this.props.content.divClassName}`
            className={`${classes.menuButton} ${classes.saveColor}`}
            variant="contained"
            color="primary"
            href="#contained-buttons"
            type="submit"
            onClick={createRoutine}
          >
            Save
          </Button>
          <Snackbar
            className={classes.widthForSnack}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={alertOpen}
            autoHideDuration={3000}
            onClose={alertClose}
          >
            <Alert
              style={{width: "100%"}}
              onClose={alertClose}
              severity="info"
            >
              <Typography>Your Routine was saved</Typography>
            </Alert>
          </Snackbar>
          <Button
            className={classes.menuButton}
            variant="contained"
            color="primary"
            href="#contained-buttons"
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
      <Grid container className={classes.actionGrid}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            <Typography>Routine Type</Typography>
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="select-routine"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={routineType}
            helperText="ahij"
            onChange={(event) => {
              setRoutineType(event.target.value);
            }}
          >
            <MenuItem id="morning-routine" value={"Morning"}>Morning Routine</MenuItem>
            <MenuItem id="evening-routine" value={"Evening"}>Evening Routine</MenuItem>
            <MenuItem id="other-routine" value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.selectDateCalendar}>
          <NewBDay
            value={selectedDate}
            onChange={(event) => {
              setSelectedDate(event);
            }}
          />
        </div>

        <SetPeriod
          value={repeater}
          valueDayOfWeek={dayOfWeek}
          onChangeAmountOfWeek={(event) => {
            setRepeater({...repeater, AmountOfWeek: event.target.value});
          }}
          onChangeEndDate={(event) => {
            setRepeater({
              ...repeater,
              EndDate: event ? event.toString() : null,
            });
          }}
          onChangeDayOfWeek={(event) => {
            setDayOfWeek({
              ...dayOfWeek,
              [event.target.name]: event.target.checked,
            });
            console.log(dayOfWeek);
          }}
        />
      </Grid>
      <Grid xs={12}>
        <Grid container className={classes.test}>
          <ProductsOfRoutine
            id="products-of-routine"
            onChangeCleanser={(event, value) => {
              testXX(event, value);
              setProd({
                ...prod,
                Cleanser: value
              })

            }}
            onChangeTreatment={(event, value) => {
              testXX(event, value);
              setProd({
                ...prod,
                Treatment: value
              })
            }}
            onChangeMoisturizer={(event, value) => {
              testXX(event, value);
              setProd({
                ...prod,
                Moisturizer: value
              })
            }}
            onChangeSunscreen={(event, value) => {
              testXX(event, value);
              setProd({
                ...prod,
                Sunscreen: value
              })
            }}
            onChangeOther={(event, value) => {
              testXX(event, value);
              setProd({
                ...prod,
                Other: value
              })
            }}


          />
          <Indicator
            value={indicator}
            onChange={(event) => {
              setIndicators({
                ...indicator,
                [event.target.name]: event.target.value,
              });
            }}
            onChangeForGoToSlepp={(event) => {
              setIndicators({
                ...indicator,
                GoToSleep: event ? event.toString() : null,
              });
            }}
            onChangeForWakeUp={(event) => {
              setIndicators({
                ...indicator,
                WakeUp: event ? event.toString() : null,
              });
            }}
            onChangeForSlider={(event, newValue) => {
              setIndicators({
                ...indicator,
                Water: newValue,
              });
            }}
          />
        </Grid>
        {/*
        <div> tady je voda{Number(indicator.Water)}</div>
        <div>je to stress {indicator.Stress}</div>
        <div>je to cas{indicator.GoToSleep}</div>
        <div>je to cas spani{indicator.WakeUp}</div>
        <div>pocet tydnu je {repeater.AmountOfWeek}</div>
        <div>konec je {String(repeater.EndDate)}</div>
        <div>poznamka je {noteAndPhoto.Note}</div>*/}

        <Grid container>
          <NoteAndPhotos
            value={noteAndPhoto}
            onChanngeNote={(event) =>
              setNoteAndPhoto({...noteAndPhoto,Note: event.target.value})
            }
            onChangePhotos={(e) => {
              console.log("onchange", e);
              setNoteAndPhoto({...noteAndPhoto,Photos: e});
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
