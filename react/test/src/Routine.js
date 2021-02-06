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

                <Button className={classes.marginAll} variant="contained" color="primary"
                        href="#contained-buttons">
                    Period
                </Button>
                <Button className={`${classes.marginAll}${classes.createButton}`} variant="contained" color="secondaryn"
                        href="#contained-buttons">
                    Create Custom Product
                </Button>
            </div>

            /*What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.

            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>
            <div>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>

        </>

    );
}
