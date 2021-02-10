import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import MultiSelect from "react-select";
import Grid from "@material-ui/core/Grid";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import makeAnimated from "react-select/animated/dist/react-select.esm";

const useStyles = makeStyles((theme) => ({

  multiSelectGrid: {
    borderColor: 'black',
    width: theme.spacing(150),
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
}));
export default function ProductsOfRoutine() {
  const classes = useStyles();
  const options = [
    {value: 'blues', label: 'Blues'},
    {value: 'rock', label: 'Rock'},
    {value: 'jazz', label: 'Jazz'},
    {value: 'orchestra', label: 'Orchestra'},
    {value: 'tom', label: 'Tom'},
    {value: 'kymbat', label: 'Kymbat'},
  ];
  const animatedComponents = makeAnimated();
  return (
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
  );
}
