import React from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import {Router} from "./components/Router";


class App extends React.Component {
  state = {
    name: 'Tom'
  }

  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CssBaseline/>
        <Router/>
      </MuiPickersUtilsProvider>
    );
  }
}

export default App;
