import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { addToShelf, searchProducts } from "../../services/ShelfServices";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
  addItem: {
    margin: theme.spacing(4),
  },
  buttonMargin: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.success.main,
    color: theme.palette.primary.contrastText,
  },
  saveButton: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.primary.contrastText,
  },
  searchItem: {
    margin: theme.spacing(3),
  },
  optionIcon: {
    maxWidth: theme.spacing(10),
    maxHeight: theme.spacing(10),
    margin: theme.spacing(1),
  },
  dialogStyle: {
    width: theme.spacing(100),
  },
  widthForSnack: {
    width: theme.spacing(50),
  },
}));
export default function AddToShelf() {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const [options, setOptions] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [selectedProduct, setSelectedProduct] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const loading = open && options.length === 0;

  const handleClose = () => {
    setOpenDialog(false);
  };
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
  const addProduct = async () => {
    console.log("onChange", selectedProduct.id);
    try {
      const res = await addToShelf({
        productId: selectedProduct.id,
        routineId: 5,
      });
      alertClick();
    } catch (e) {
      console.log(e, "Can not add product to Shelf");
    }
  };
  const [alertOpen, setAlertOpen] = useState(false);
  const alertClick = () => {
    setAlertOpen(true);
  };
  const alertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        className={classes.buttonMargin}
        onClick={handleClickOpen}
      >
        <Typography>Add Product To Shelf</Typography>
      </Button>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth="md"
      >
        <DialogTitle id="form-dialog-title">
          <Typography>
            <h3>Choose product</h3>
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid item xs={12} lg={12} className={classes.searchItem}>
              <Autocomplete
                {...options}
                getOptionLabel={(options) => options.name}
                id="country-select-demo"
                options={options}
                classes={{
                  option: classes.option,
                }}
                onChange={(event, value) => setSelectedProduct(value)}
                onInputChange={(event, newInputValue) => {
                  getSearchingProducts(newInputValue);
                }}
                autoHighlight
                renderOption={(options) => (
                  <React.Fragment>
                    {<img className={classes.optionIcon} src={options.img} />}{" "}
                    {options.name}
                  </React.Fragment>
                )}
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
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={addProduct}
            className={classes.saveButton}
            color="primary"
          >
            Add
          </Button>
          <Snackbar
            className={classes.widthForSnack}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={alertOpen}
            autoHideDuration={3000}
            onClose={alertClose}
          >
            <Alert
              style={{ width: "100%" }}
              onClose={alertClose}
              severity="info"
            >
              <Typography>Product was saved!</Typography>
            </Alert>
          </Snackbar>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
