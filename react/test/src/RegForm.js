import React, {Component} from 'react'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
/*import styles from 'style.css';*/


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
export default function RegForm(){
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

        return(
            <form className={makeStyles().root} noValidate autoComplete="off">
                <div>
                    <TextField required id="outlined-required" label="Name" variant="outlined"/>
                    <TextField required id="outlined-required" label="Email" variant="outlined"/>
                    <TextField id="outlined-password-input" label="Password"
                               type="password" autoComplete="current-password" variant="outlined"/>
                </div>


            </form>

        )

}

