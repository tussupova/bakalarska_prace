import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paperStyle: {},
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function UserDetail() {
  const classes = useStyles();
  return (
    <>

      <Grid container direction="column"
            alignItems="center"
            justify="center">
        <Paper>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Normal"
              id="margin-normal"
              defaultValue="Default Value"
              className={classes.textField}
              helperText="Some important text"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Normal"
              id="margin-normal"
              defaultValue="Default Value"
              className={classes.textField}
              helperText="Some important text"
              margin="normal"
            />
          </Grid> <Grid item xs={12} sm={6}>
          <TextField
            label="Normal"
            id="margin-normal"
            defaultValue="Default Value"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
          />
        </Grid>
        </Paper>
      </Grid>

    </>
  );
}
