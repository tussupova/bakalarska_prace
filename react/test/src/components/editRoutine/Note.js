import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import {Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
const useStyles = makeStyles((theme) => ({

  note: {
    width: "100%",
    display: "flex",
  },
  noteLabel: {
    paddingTop: theme.spacing(1),
    textAlign: "center",
  },
  noteTextField: {
    width: "100%",
    padding: theme.spacing(1),
  },
}));
export default function Note() {
  const classes = useStyles();
  return (
    <>
      <FormControl className={classes.note}>
        <div>
          <FormLabel className={classes.noteLabel} component="legend">
            <Typography>Note</Typography>
          </FormLabel>
        </div>
        <div className={classes.noteTextField}>
          <TextField
            id="note"
            variant="outlined"
            multiline
            label={<Typography>Write some note</Typography>}
            rows={8}
            className={classes.noteTextField}
            //value={props.value.noteAndPhoto}
            //onChange={props.onChanngeNote}
          />
        </div>
      </FormControl>
    </>
  );

}
