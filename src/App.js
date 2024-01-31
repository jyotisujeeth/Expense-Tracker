
import React from "react";
import Header from "./Components/Header/Header";
//import SignUp from "./Components/SignUp/SignUp";
import SignUp from "./Components/Authentication/SignUp";
import Login from "./Components/Authentication/Login";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Pages/HomePage/Home";
import PasswordReset from "./Components/Authentication/passwordReset";
import UserDetails from "./Components/Authentication/UserDetails/UserDetails";
function App() {
  return (
    <>
      <Header />
      <SignUp />
      <Switch>
        <Route path="/" exact>
          <SignUp />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/resetPassword">
          <PasswordReset />
        </Route>
        <Route path="/userDetails">
          <UserDetails />
        </Route>
      </Switch>
    </>
  );
}