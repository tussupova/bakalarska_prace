import React, { Component, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import Snackbar from "@material-ui/core/Snackbar";
import { useHistory, useParams } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import NewBDay from "../NewBDay";
import SetPeriod from "../SetPeriod";
import {
  createRoutineAsync,
  editRoutineAsync,
  getEditRoutine,
} from "../../services/RoutineServices";
import ProductsOfRoutine from "../createRoutine/ProductsOfRoutine";
import Indicator from "../createRoutine/Indicator";
import Note from "../editRoutine/Note";
import EditIndicator from "./EditIndicator";
import EditProducts from "./EditProducts";
import { uploadPhotosAsync } from "../../services/PhotoServices";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    padding: theme.spacing(2),
  },
  breadcrumbsFont: {
    fontSize: theme.spacing(1.8),
  },
  titleRoutine: {
    color: theme.palette.primary.main,
  },
  secondaryColor: {
    //color: theme.palette.text.secondary
    color: theme.palette.secondary.main,
  },
  root: {
    flexGrow: 1 /*justify="center"
    alignItems="center"*/,
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  saveColor: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.primary.contrastText,
  },
  titlePadding: {
    paddingRight: theme.spacing(6),
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
  widthForSnack: {
    width: theme.spacing(50),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function EditRoutine() {
  const classes = useStyles();
  const history = useHistory();
  const [prod, setProd] = useState({
    Cleanser: [],
    Treatment: [],
    Moisturizer: [],
    Sunscreen: [],
    Other: [],
  });

  function handleClick(event) {
    history.push("/my-routine");
  }

  function homeClick(event) {
    history.push("/home");
  }
  const [indicator, setIndicators] = useState({
    Water: "",
    Stress: "",
    Sleep: "",
  });
  const [note, setNote] = useState('');
  const [routineId, setRoutineId] = useState(0)
  const { routineType, date } = useParams();

  const getRoutines = async () => {
    try {
      const res = await getEditRoutine({ routineType, date });
      setNote(res.data.note);
      setRoutineId(res.data.routineId)
      setIndicators({
        Water: res.data.water,
        Stress: res.data.stress,
        Sleep: res.data.sleep,
      });
      setProd({
        Cleanser: res.data.cleanser,
        Treatment: res.data.treatment,
        Moisturizer: res.data.moisturizer,
        SunScreen: res.data.sunScreen,
        Other: res.data.other,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const sendPhoto = async (routineId) => {
    try {
      const res = await uploadPhotosAsync(
        {
          photos: [],
        },
        { routineId: routineId }
      );
      console.log("Photo was send");
    } catch (e) {
      console.log(e, "Photos error");
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

  const editRoutine = async () => {
    try {
      const response = await editRoutineAsync({
        routineId: routineId,
        note: note,
        stress: indicator.Stress,
        water: Number(indicator.Water),
        goToSleep: indicator.GoToSleep
          ? new Date(indicator.GoToSleep).toISOString()
          : null,
        wakeUp: indicator.WakeUp
          ? new Date(indicator.WakeUp).toISOString()
          : null,
        routineDate: date,
        cleanser: prod.Cleanser,
        treatment: prod.Treatment,
        moisturizer: prod.Moisturizer,
        sunscreen: prod.Sunscreen,
        other: prod.Other,
      });
      // await sendPhoto(response.data);
      alertClick();
    } catch (err) {
      console.log("my error catch", err);
    }
  };

  useEffect(() => {
    // vola se vzdycky pri renderovani a pouze jednou
    getRoutines();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item className={classes.breadcrumbs} xs={12} sm={4}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="inherit" />}
            aria-label="breadcrumb"
          >
            <Link color="inherit" href="/" fontSize>
              <Typography
                className={classes.breadcrumbsFont}
                onClick={homeClick}
              >
                <HomeIcon />
              </Typography>
            </Link>
            <Link color="inherit">
              <Typography
                className={classes.breadcrumbsFont}
                onClick={handleClick}
              >
                Routine
              </Typography>
            </Link>
            <Typography color="textPrimary" className={classes.breadcrumbsFont}>
              Edit Routine
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid className={classes.root} item xs={12} sm={4} container>
          <Typography>
            {" "}
            <h2 className={classes.titleRoutine}>Edit Daily Routine </h2>
          </Typography>
        </Grid>
        <Grid className={classes.root} item xs={12} sm={4} container>
          <Button
            className={`${classes.menuButton} ${classes.saveColor}`}
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => editRoutine()}
          >
            Save
          </Button>

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
        <Alert style={{ width: "100%" }} onClose={alertClose} severity="info">
          <Typography>Your Routine was saved</Typography>
        </Alert>
      </Snackbar>
      <Grid container className={classes.actionGrid}>
        <Typography className={classes.titlePadding}>
          <h3 className={classes.titleRoutine}>Routine Type: {routineType} </h3>
        </Typography>

        <Typography className={classes.titlePadding}>
          <h3 className={classes.secondaryColor}>Routine Date: {date}</h3>
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Grid container className={classes.test}>
          <EditProducts
            value={prod}
            id="products-of-routine"
            onChangeCleanser={(event, value) => {

              setProd({
                ...prod,
                Cleanser: value,
              });
            }}
            onChangeTreatment={(event, value) => {

              setProd({
                ...prod,
                Treatment: value,
              });
            }}
            onChangeMoisturizer={(event, value) => {

              setProd({
                ...prod,
                Moisturizer: value,
              });
            }}
            onChangeSunscreen={(event, value) => {

              setProd({
                ...prod,
                Sunscreen: value,
              });
            }}
            onChangeOther={(event, value) => {

              setProd({
                ...prod,
                Other: value,
              });
            }}
          />
          <EditIndicator value={indicator}
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
        <Grid container>
          <Note value={note} onChanngeNote={(event) =>
          setNote(event.target.value)
        }/>
        </Grid>
      </Grid>
    </>
  );
}
