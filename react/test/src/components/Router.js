import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import {RoutinePage} from "../pages/Routine.page";
import {NotFoundPage} from "../pages/NotFound.page";
import {SignIn, SignInPage} from "../pages/SignIn.page";
import {SignUpPage} from "../pages/SignUp.page";
import {MyRoutinePage} from "../pages/MyRoutine.page";
import {AlbumPage} from "../pages/Album.page";
import {ShelfPage} from "../pages/Shelf.page";
import {UserPage} from "../pages/User.page";
import {HomePage} from "../pages/Home.Page";
import {EditRoutinePage} from "../pages/EditRoutine.page"

export const Router = () => {
  return <BrowserRouter>
    <Switch>
      <Route exact path='/home'><HomePage/></Route>
      <Route exact path='/create-routine'><RoutinePage/></Route>
      <Route exact path='/about'>about</Route>
      <Route exact path='/sign-up'><SignUpPage/></Route>
      <Route exact path='/sign-in'><SignInPage/></Route>
      <Route exact path='/my-routine'><MyRoutinePage/></Route>
      <Route exact path='/album'><AlbumPage/></Route>
      <Route exact path='/shelf'><ShelfPage/></Route>
      <Route exact path='/user'><UserPage/></Route>
      <Route path='/edit-routine/:routineType/:date'><EditRoutinePage/></Route>
      <Route path='*'><NotFoundPage/></Route>
    </Switch>
  </BrowserRouter>
}
