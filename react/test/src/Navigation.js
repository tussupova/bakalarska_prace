import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


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
        alignContent:"end"

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

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <div style={{ width: '100%' }}>
                    <Box display="flex" p={1} >
                        <Box p={1} flexGrow={1} >
                            LOGO
                        </Box>
                        <Button className={classes.menuButton} color="inherit" p={1} >
                            My Products
                        </Button>
                        <Button className={classes.menuButton} color="inherit" p={1} >
                            My Routine
                        </Button>
                        <div>
                        <Button className={classes.menuButton} color="inherit" p={1} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            User
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>My account</MenuItem>
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
