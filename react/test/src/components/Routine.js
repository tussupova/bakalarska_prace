import React, {Component} from 'react'
import {Button} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import makeAnimated from 'react-select/animated';

import SetPeriod from "./SetPeriod";
import Indicator from "./createRoutine/Indicator";
import NoteAndPhotos from "./createRoutine/NoteAndPhotos";
import ProductsOfRoutine from "./createRoutine/ProductsOfRoutine";
import Typography from "@material-ui/core/Typography";
import NewBDay from "./NewBDay";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    position: "sticky"
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-around",
    color: theme.palette.text.secondary,
    frozen: true

  },
  actionGrid: {
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignContent: 'center'
    }

  },
  selectDateCalendar: {
    width: '16%',
    margin: theme.spacing(0),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    }
  },
  createButton: {

    color: theme.palette.getContrastText(theme.palette.error.main),
    background: theme.palette.error.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
  },
  marginAll: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.success.main,
    color: theme.palette.primary.contrastText
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 150,
  },
  test: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  breadcrumbs:{
    padding: theme.spacing(2),

  },
  breadcrumbsFont:{
    fontSize:theme.spacing(1.5)
  }
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Routine() {
  const classes = useStyles();

  const [routineType, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  return (
    <>
      <div className={classes.breadcrumbs}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="inherit"/>} aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick} fontSize>
            <Typography className={classes.breadcrumbsFont}><HomeIcon/></Typography>
          </Link>
          <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            <Typography className={classes.breadcrumbsFont}>My Routine</Typography>
          </Link>
          <Typography color="textPrimary" className={classes.breadcrumbsFont}>Create Routine</Typography>
        </Breadcrumbs>
      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <grid>
                <Typography> Create Routine </Typography>
              </grid>
              <grid>
                <Button className={classes.menuButton} variant="contained" color="primary"
                        href="#contained-buttons">
                  Save
                </Button>
                <Button className={classes.menuButton} variant="contained" color="primary"
                        href="#contained-buttons">
                  Cancel
                </Button>
              </grid>
            </Paper>
          </Grid>

        </Grid>
      </div>
      <Grid container className={classes.actionGrid}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label"><Typography>Routine Type</Typography></InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={routineType}
            onChange={handleChange}
          >
            <MenuItem value={10}>Morning Routine</MenuItem>
            <MenuItem value={20}>Evening Routine</MenuItem>
            <MenuItem value={30}>Other</MenuItem>
          </Select>
        </FormControl>
        <div className={classes.selectDateCalendar}><NewBDay/></div>
        <SetPeriod/>
        <Button className={classes.marginAll} variant="contained"
                href="#contained-buttons">
          <Typography>Create Custom Product</Typography>
        </Button>
      </Grid>
      <Grid xs={12}>
        <Grid className={classes.test}>
          <ProductsOfRoutine/>
          <Indicator/>
        </Grid>
        <NoteAndPhotos/>
      </Grid>
    </>
  );
}
