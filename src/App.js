
import React, { useContext } from "react";
import Header from "./Components/Header/Header";
//import SignUp from "./Components/SignUp/SignUp";
import SignUp from "./Components/Authentication/SignUp";
import Login from "./Components/Authentication/Login";
import { Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Pages/HomePage/Home";
import PasswordReset from "./Components/Authentication/passwordReset";
import UserDetails from "./Components/Authentication/UserDetails/UserDetails";
import CreateAuth from "./Store/AuthContext/Create-Auth";
function App() {
  const AuthCtx = useContext(CreateAuth);
  console.log(AuthCtx.isLoggedIn);

  return (
    <>
      <Header />
@@ -18,12 +22,16 @@ function App() {
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/userdetails">
          <UserDetails />
        </Route>
        {AuthCtx.isLoggedIn && (
          <Route path="/home" exact>
            <Home />
          </Route>
        )}
        {AuthCtx.isLoggedIn && (
          <Route path="/userdetails">
            <UserDetails />
          </Route>
        )}
        <Route path="/resetPassword">
          <PasswordReset />
        </Route>

        