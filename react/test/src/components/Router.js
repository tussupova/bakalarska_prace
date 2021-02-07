import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import {RoutinePage} from "../pages/Routine.page";
import {NotFoundPage} from "../pages/NotFound.page";
import SignUp from "./SignUp";
import {SignIn, SignInPage} from "../pages/SignIn.page";
import {SignUpPage} from "../pages/SignUp.page";

export const Router = () => {
  return <BrowserRouter>
    <Switch>
      <Route exact path='/createRoutine'><RoutinePage/></Route>
      <Route exact path='/about'>about</Route>
      <Route exact path='/signUp'><SignUpPage/></Route>
      <Route exact path='/signIn'><SignInPage/></Route>
      <Route path='*'><NotFoundPage/></Route>
    </Switch>
  </BrowserRouter>
}
