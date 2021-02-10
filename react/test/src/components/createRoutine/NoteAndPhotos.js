import {DropzoneArea} from "material-ui-dropzone";
import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  photoAndNoteGrid: {
    borderColor: 'black',
    width: theme.spacing(100),
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
export default function NoteAndPhotos() {
  const classes = useStyles();
  return (

    <Grid className={classes.photoAndNoteGrid}>
      <DropzoneArea
        acceptedFiles={['image/*']}
        dropzoneText={"Drag and drop an image here or click"}
        onChange={(files) => console.log('Files:', files)}
      />
      <FormControl className={classes.note}>
        <div><FormLabel className={classes.noteLabel} component="legend">Note</FormLabel></div>
        <div className={classes.noteTextField}><TextField id="note" variant="outlined" multiline
                                                          rows={4}
                                                          className={classes.noteTextField}/></div>
      </FormControl>
    </Grid>
  );
}
