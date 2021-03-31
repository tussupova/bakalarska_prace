/* eslint-disable no-use-before-define */
import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import {downloadPhotosInfoAsync} from "../services/PhotoServices";
import {addToShelf, getUsersProducts, removeUsersProduct, searchProducts} from "../services/ShelfServices";
// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11


const useStyles = makeStyles((theme) => ({

  productItem: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4)
  },
  listClass: {
    backgroundColor: theme.palette.background.paper,
  },
  productIcon: {
    maxHeight: theme.spacing(20),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    maxWidth: theme.spacing(20)
  },
  iconDelete:{
    padding:theme.spacing(4),

    [theme.breakpoints.down("xs")]: {
      padding:theme.spacing(3),

    },
  },
  productsItem:{
    flexDirection: "row",
    padding: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  itemText: {
    maxWidth: theme.spacing(30),
    [theme.breakpoints.down("xs")]: {
      maxWidth: theme.spacing(20),
    },
  },
  gridItemProduct:{
    padding:theme.spacing(2)
  },
  title:{
    paddingTop: theme.spacing(5)
  }

}));


export default function Shelf() {
  const [products, setProducts] = React.useState([])
  const [dense, setDense] = React.useState(true);

  const getProducts = async () => {
    try {
      const res = await getUsersProducts();
      console.log('brand', res.data);
      const x = res.data.map((e) => {
        return {
          brand: e.brand,
          name: e.name,
          img: e.img,
          id: e.id
        }
      });
      setProducts(x);
    } catch (e) {
      console.log(e, "Can not download users product");
    }
  };
  const deleteProduct = async (id) => {
    try {
      const deleteProduct = await removeUsersProduct(id);
      await getProducts();
    } catch (e) {
      console.log(e, "Can not delete product");
    }
  };


  useEffect(() => {
    // vola se vzdycky pri renderovani a pouze jednou
    getProducts();
  }, []);
  const classes = useStyles();



  return (
    <Grid container direction="column"
          alignItems="center"
          justify="center">
      <Grid item>
        <Typography variant="h4" className={classes.title} >
          My Shelf
        </Typography>
      </Grid>

          <List  dense={dense}>
            <Grid container className={classes.productsItem} >
            {products.map((list) => {
              return (
                <Grid item xs="12" lg="4" sm="4" className={classes.gridItemProduct}>
                <ListItem>
                  <ListItemAvatar>
                    <img className={classes.productIcon} src={list.img}/>
                  </ListItemAvatar>
                  <ListItemText
                    primary={list.name}
                    secondary={list.brand}
                    className={classes.itemText}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" className={classes.iconDelete}>
                      <DeleteIcon onClick={() => deleteProduct(list.id)}/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                </Grid>
              )
            })}
            </Grid>
          </List>

    </Grid>
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js

