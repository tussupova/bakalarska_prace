import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import MultiSelect from "react-select";
import Grid from "@material-ui/core/Grid";
import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import makeAnimated from "react-select/animated/dist/react-select.esm";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import {searchProducts} from "../../services/ShelfServices";
import {Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import RadioGroup from "@material-ui/core/RadioGroup";

const useStyles = makeStyles((theme) => ({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
  multiSelectGrid: {
    padding: theme.spacing(3),
    marginLeft:theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(0),
    },
  },
  multiSelectItem: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  optionIcon: {
    maxWidth: theme.spacing(10),
    maxHeight: theme.spacing(10),
    margin: theme.spacing(1),
  },
  multiSelectInput: {
    width: "80%",
  },
  multiSelectLabel: {
    width: theme.spacing(13),
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  paper:{
    padding: theme.spacing(4),
  }

}));
export default function EditProducts(props) {
  const classes = useStyles();
  const [options, setOptions] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [selectedProduct, setSelectedProduct] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const loading = open && options.length === 0;
  const [cleanser, setCleanser]=React.useState([]);
  const [other, setOther]=React.useState([]);


  const getSearchingProducts = async (chars) => {
    try {
      setInputValue(chars);
      console.log("zacatek hledani", chars);
      const foundedProducts = await searchProducts(inputValue);
      console.log("vysledek", foundedProducts.data);
      const pr = foundedProducts.data.map((e) => {
        return {
          name: e.brand + " " + e.name,
          img: e.img,
          id: e.id,
        };
      });
      setOptions(pr);
      console.log("pr", pr);
    } catch (e) {
      console.log(e, "Can not search product");
    }
  };
  const animatedComponents = makeAnimated();
  const testFun=(value)=>{
    setSelectedProduct(value)
    console.log('selected', selectedProduct)
  }

  return (
    <Grid className={classes.multiSelectGrid} xs={12} lg={7}>
      <Paper className={classes.paper}>
        <FormControl className={classes.multiSelectItem}>
          <Grid item>
            <FormLabel className={classes.multiSelectLabel} component="legend">
              <Typography>Cleansing</Typography>
            </FormLabel>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Autocomplete
              data-cy="cleanser-autocomplete"
              multiple
              {...options}
              getOptionLabel={(options) => options.name}
              options={options}
              classes={{
                option: classes.option,
              }}
              //onChange={props.onChange}
              autoHighlight
              disableClearable
              value={props.value.Cleanser? props.value.Cleanser :[]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Find products"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  data-cy="cleanser"
                  inputProps={{
                    ...params.inputProps,
                    // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </Grid>
        </FormControl>
        <FormControl className={classes.multiSelectItem}>
          <Grid item>
            <FormLabel className={classes.multiSelectLabel} component="legend">
              <Typography> Treatment </Typography>
            </FormLabel>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Autocomplete
              multiple
              disableClearable
              value={props.value.Treatment? props.value.Treatment :[]}
              {...options}
              getOptionLabel={(options) => options.name}
              options={options}
              classes={{
                option: classes.option,
              }}
              onChange={(event, value) => props.onChangeTreatment(event, value)}
              onInputChange={(event, newInputValue) => {
                getSearchingProducts(newInputValue);
              }}
              autoHighlight
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Find products"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  inputProps={{
                    ...params.inputProps,
                    // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </Grid>
        </FormControl>
        <FormControl className={classes.multiSelectItem}>
          <Grid item>
            <FormLabel className={classes.multiSelectLabel} component="legend">
              <Typography> Moisturizer</Typography>
            </FormLabel>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Autocomplete
              multiple
              {...options}
              disableClearable
              value={props.value.Moisturizer? props.value.Moisturizer :[]}
              getOptionLabel={(options) => options.name}
              options={options}
              classes={{
                option: classes.option,
              }}
              onChange={(event, value) => props.onChangeMoisturizer(event, value)}
              onInputChange={(event, newInputValue) => {
                getSearchingProducts(newInputValue);
              }}
              autoHighlight
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Find products"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  inputProps={{
                    ...params.inputProps,
                    // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </Grid>
        </FormControl>
        <FormControl className={classes.multiSelectItem}>
          <Grid item>
            <FormLabel className={classes.multiSelectLabel} component="legend">
              <Typography>Sunscreen</Typography>
            </FormLabel>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Autocomplete
              multiple
              {...options}
              getOptionLabel={(options) => options.name}
              options={options}
              disableClearable
              //value={props.value.SunScreen}
              classes={{
                option: classes.option,
              }}
              onChange={(event, value) => props.onChangeSunscreen(event, value)}
              onInputChange={(event, newInputValue) => {
                getSearchingProducts(newInputValue);
              }}
              autoHighlight
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Find products"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  inputProps={{
                    ...params.inputProps,
                    // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </Grid>
        </FormControl>
        <FormControl className={classes.multiSelectItem}>
          <Grid item>
            <FormLabel className={classes.multiSelectLabel} component="legend">
              <Typography> Other</Typography>
            </FormLabel>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Autocomplete
              multiple
              {...options}
              getOptionLabel={(options) => options.name}
              options={options}
              disableClearable
              value={props.value.Other? props.value.Other :[]}
              classes={{
                option: classes.option,
              }}
              onChange={(event, value) => props.onChangeOther(event, value)}
              onInputChange={(event, newInputValue) => {
                getSearchingProducts(newInputValue);
              }}
              autoHighlight
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Find products"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  inputProps={{
                    ...params.inputProps,
                    // disable autocomplete and autofill
                  }}
                />
              )}
            />
          </Grid>
        </FormControl>
      </Paper>
    </Grid>
  );
}
