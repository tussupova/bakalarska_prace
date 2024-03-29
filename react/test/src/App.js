import React from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import {Router} from "./components/Router";
import "./App.css"
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  //theme.palette.success.main,
  palette: {
    primary: {
      main: '#045069'
    },
    success:{
      main: '#599A00'
    },
    secondary:{
      main:'#E9816E'
    },
    background: {
      default: '#ffeae629'
    }
  }
});
class App extends React.Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <CssBaseline/>
        <Router/>
      </MuiPickersUtilsProvider>
      </ThemeProvider>
    );
  }
}

export default App;
