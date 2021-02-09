import React, {Component} from 'react'
import {Button} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import MultiSelect from 'react-select';
import makeAnimated from 'react-select/animated';
import FormLabel from "@material-ui/core/FormLabel";
import {borders} from '@material-ui/system';
import {DropzoneArea} from "material-ui-dropzone";
import TextField from "@material-ui/core/TextField";
import SetPeriod from "./SetPeriod";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    frozen: true,
    position: "sticky"
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-around",
    color: theme.palette.text.secondary,
    frozen: true

  },
  createButton: {
    color: "#43a047"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
  },
  marginAll: {
    margin: theme.spacing(3)
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  multiSelectGrid: {
    borderColor: 'black',
    width: '60%',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(5),
    border: '2px solid'

  },
  multiSelectItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  multiSelectInput: {
    width: '80%',
    padding: theme.spacing(2)
  },
  multiSelectLabel: {
    width: theme.spacing(13),
    padding: theme.spacing(1),
    marginTop: theme.spacing(2)
  },
  photoAndNoteGrid: {
    borderColor: 'black',
    width: '60%',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(5),
    border: '2px solid'

  },
  note: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  noteTextField: {
    width: '90%',
    padding: theme.spacing(1),

  },
  noteLabel: {
    width: theme.spacing(13),
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    textAlign: 'center'

  }
}));

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
  const animatedComponents = makeAnimated();
  const options = [
    {value: 'blues', label: 'Blues'},
    {value: 'rock', label: 'Rock'},
    {value: 'jazz', label: 'Jazz'},
    {value: 'orchestra', label: 'Orchestra'},
    {value: 'tom', label: 'Tom'},
    {value: 'kymbat', label: 'Kymbat'},
  ];

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <grid>
                Some title
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
      <div>
        <Button className={classes.button} onClick={handleOpen}>
          Select routine type
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Routine Type</InputLabel>
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
        <Button className={classes.marginAll} variant="contained" color="primary"
                href="#contained-buttons">
          Date
        </Button>
        <SetPeriod></SetPeriod>
        <Button className={`${classes.marginAll}${classes.createButton}`} variant="contained" color="secondaryn"
                href="#contained-buttons">
          Create Custom Product
        </Button>
      </div>
      <Grid className={classes.multiSelectGrid}>

        <FormControl className={classes.multiSelectItem}>
          <div>
            <FormLabel className={classes.multiSelectLabel} component="legend">Cleansing</FormLabel></div>
          <div className={classes.multiSelectInput}>
            <MultiSelect
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={options}
            /></div>
        </FormControl>
        <FormControl className={classes.multiSelectItem}>
          <div>
            <FormLabel className={classes.multiSelectLabel} component="legend">Treatment</FormLabel></div>
          <div className={classes.multiSelectInput}>
            <MultiSelect
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={options}
            /></div>
        </FormControl>
        <FormControl className={classes.multiSelectItem}>
          <div>
            <FormLabel className={classes.multiSelectLabel} component="legend">Moisturizer</FormLabel></div>
          <div className={classes.multiSelectInput}>
            <MultiSelect
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={options}
            /></div>
        </FormControl>
        <FormControl className={classes.multiSelectItem}>
          <div>
            <FormLabel className={classes.multiSelectLabel} component="legend">Sunscreen</FormLabel></div>
          <div className={classes.multiSelectInput}>
            <MultiSelect
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={options}
            /></div>
        </FormControl>
        <FormControl className={classes.multiSelectItem}>
          <div>
            <FormLabel className={classes.multiSelectLabel} component="legend">Other</FormLabel></div>
          <div className={classes.multiSelectInput}>
            <MultiSelect
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={options}
            /></div>
        </FormControl>
      </Grid>
      <Grid className={classes.photoAndNoteGrid}>
        <div>

          <DropzoneArea
            acceptedFiles={['image/*']}
            dropzoneText={"Drag and drop an image here or click"}
            onChange={(files) => console.log('Files:', files)}
          />
        </div>

        <FormControl className={classes.note}>
          <div><FormLabel className={classes.noteLabel} component="legend">Note</FormLabel></div>
          <div className={classes.noteTextField}><TextField id="note" variant="outlined" multiline
                                                            rows={4}
                                                            className={classes.noteTextField}/></div>
        </FormControl>

      </Grid>
    </>
  );
}
