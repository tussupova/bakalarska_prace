import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {useHistory} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  setflexend: {
    display: "flex",
    alignContent: "end"

  }
}));

export default function Navigation() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();

  const onClickRoutine = () => {
    history.push('/my-routine');
  }
  const onClickAlbum = () => {
    history.push('/album');
  }
  const onClickShelf=()=>{
    history.push('/shelf')
  }
  const onClickMyAccount=()=>{
    history.push('/user')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div style={{width: '100%'}}>
            <Box display="flex" p={1}>
              <Box p={1} flexGrow={1}>
                LOGO
              </Box>
              <Button className={classes.menuButton} color="inherit" p={1} onClick={onClickRoutine}>
                Routine
              </Button>
              <Button className={classes.menuButton} color="inherit" p={1} onClick={onClickAlbum}>
                Album
              </Button>
              <Button className={classes.menuButton} color="inherit" p={1} onClick={onClickShelf}>
                Shelf
              </Button>
              <div>
                <Button className={classes.menuButton} color="inherit" p={1} aria-controls="simple-menu"
                        aria-haspopup="true" onClick={handleClick}>
                  User
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={onClickMyAccount}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
