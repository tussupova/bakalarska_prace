import {DropzoneArea} from "material-ui-dropzone";
import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  photoAndNoteGrid: {
    borderColor: 'black',
    margin: theme.spacing(3),
    padding: theme.spacing(3),
  },
  note: {
    width: '100%',
    display: 'flex',

  },
  noteTextField: {
    width: '100%',
    padding: theme.spacing(1),

  },
  noteLabel: {
    paddingTop: theme.spacing(1),
    textAlign: 'center'

  },
  dropText: {
    padding: theme.spacing(1)
  }
}));
export default function NoteAndPhotos(props) {
  const classes = useStyles();
  return (

    <Grid className={classes.photoAndNoteGrid} xs={12} lg={12}>
      <DropzoneArea className={classes.dropText}
                    acceptedFiles={['image/*']}
                    dropzoneText={<Typography> Drag and drop an image here or click</Typography>}
                    value={props.value.Photos}
                    onChange={props.onChangePhotos}
      />
      <FormControl className={classes.note}>
        <div><FormLabel className={classes.noteLabel} component="legend"><Typography>Note</Typography></FormLabel></div>
        <div className={classes.noteTextField}><TextField id="note" variant="outlined" multiline
                                                          label={<Typography>Write some note</Typography>}
                                                          rows={8}
                                                          className={classes.noteTextField}
                                                          value={props.value.noteAndPhoto}
                                                          onChange={props.onChanngeNote}
        />
        </div>
      </FormControl>
    </Grid>
  );
}
