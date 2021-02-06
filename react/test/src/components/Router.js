import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import {RoutinePage} from "../pages/Routine.page";
import {NotFoundPage} from "../pages/NotFound.page";
import SignUp from "./SignUp";
import {SignIn} from "../pages/SignIn.page";

export const Router = () => {
  return <BrowserRouter>
    <Switch>
      <Route exact path='/'><RoutinePage/></Route>
      <Route exact path='/about'>about</Route>
      <Route exact path='/registrate'><SignUp/></Route>
      <Route exact path='/signIn'><SignIn/></Route>
      <Route path='*'><NotFoundPage/></Route>
    </Switch>
  </BrowserRouter>
}
