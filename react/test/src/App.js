import React from 'react'
import Auto from "./Auto";
import RegForm from "./RegForm"
import BdayForm from "./BdayForm";
import NewBDay from "./NewBDay";
import Gender from "./Gender";
import Navigation from "./Navigation";
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiPickersUtilsProvider from "@material-ui/pickers/MuiPickersUtilsProvider";
import DateFnsUtils from "@date-io/date-fns";
import SignUp from "./SignUp";
import Routine from "./Routine";


class App extends React.Component {
    state = {
        name: 'Tom'
    }

    render() {
        return <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                <CssBaseline/>
{/*                <Navigation/>
                <Routine/>*/}
                                <SignUp/>


            </MuiPickersUtilsProvider>


        </div>;
    }
}

export default App;
