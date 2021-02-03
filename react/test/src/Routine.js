import React, {Component} from 'react'
import {Button} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        display:"flex",
        justifyContent:"space-around",
        color: theme.palette.text.secondary,
        flexShrink: "0"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function Routine() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <grid>
                           Some title
                        </grid>
                        <grid>
                        <Button className={classes.menuButton} variant="contained" color="primary" href="#contained-buttons">
                            Save
                        </Button>
                        <Button className={classes.menuButton} variant="contained" color="primary" href="#contained-buttons">
                            Cancel
                        </Button>
                        </grid>
                    </Paper>
                </Grid>

            </Grid>
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
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>            <div>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </div>

        </div>

    );
}
