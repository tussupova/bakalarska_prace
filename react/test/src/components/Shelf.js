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
    maxHeight: theme.spacing(25),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    maxWidth: theme.spacing(25)
  },


}));


export default function Shelf() {
  const [products, setProducts] = React.useState([])
  const [dense, setDense] = React.useState(false);

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
    <Grid container>
      <Grid item xs={12} md={6} className={classes.productItem}>
        <Typography variant="h6" className={classes.title}>
          Avatar with text and icon
        </Typography>
        <div className={classes.listClass}>
          <List dense={dense}>
            {products.map((list) => {
              return (
                <ListItem>
                  <ListItemAvatar>
                    <img className={classes.productIcon} src={list.img}/>
                  </ListItemAvatar>
                  <ListItemText
                    primary={list.name}
                    secondary={list.brand}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon onClick={() => deleteProduct(list.id)}/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )
            })}
          </List>
        </div>
      </Grid>
    </Grid>
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js

