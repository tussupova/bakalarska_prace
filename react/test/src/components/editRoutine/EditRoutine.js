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
import { getEditRoutine } from "../../services/RoutineServices";
import ProductsOfRoutine from "../createRoutine/ProductsOfRoutine";
import Indicator from "../createRoutine/Indicator";
import Note from "../editRoutine/Note";
import EditIndicator from "./EditIndicator";
import EditProducts from "./EditProducts";

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
}));

export default function EditRoutine() {
  const classes = useStyles();
  const history = useHistory();

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
  const [note, setNote] = useState();
  const { routineType, date } = useParams();
  const [products, setProducts] = useState({
    Cleanser: [],
    Treatment: [],
    Moisturizer: [],
    SunScreen: [],
    Other: [],
  });
  const getRoutines = async () => {
    try {
      const res = await getEditRoutine({ routineType, date });
      setNote(res.data.note);

      setIndicators({
        Water: res.data.water,
        Stress: res.data.stress,
        Sleep: res.data.sleep,
      });
      setProducts({
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
        <Grid item className={classes.root} item xs={12} sm={4} container>
          <Typography>
            {" "}
            <h2 className={classes.titleRoutine}>Edit Daily Routine </h2>
          </Typography>
        </Grid>
        <Grid item className={classes.root} item xs={12} sm={4} container>
          <Button
            //`${this.state.className} ${this.props.content.divClassName}`
            className={`${classes.menuButton} ${classes.saveColor}`}
            variant="contained"
            color="primary"
            href="#contained-buttons"
            type="submit"
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
          <EditProducts value={products} />
          <EditIndicator value={indicator}></EditIndicator>
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
          <Note value={note}></Note>
        </Grid>
      </Grid>
    </>
  );
}
