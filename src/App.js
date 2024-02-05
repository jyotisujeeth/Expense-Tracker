
import React, { useContext } from "react";
import Header from "./Components/Header/Header";
//import SignUp from "./Components/SignUp/SignUp";
import SignUp from "./Components/Authentication/SignUp";
import Login from "./Components/Authentication/Login";
import { Route, Switch, } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Pages/HomePage/Home";
import PasswordReset from "./Components/Authentication/passwordReset";
import UserDetails from "./Components/Authentication/UserDetails/UserDetails";
import CreateAuth from "./Store/AuthContext/Create-Auth";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import Error from "./Pages/ErrorPage/Error";
import './App.css';

function App() {
  const AuthCtx = useContext(CreateAuth);
  // console.log(AuthCtx.isLoggedIn);

 
        return (
    <div className="App">
      <Header />
      <Switch>
 <PrivateRoute path="/" Component={Home} exact />
        <PrivateRoute path="/home" Component={Home} exact />
        <PublicRoute path="/resetPassword" Component={PasswordReset} exact />
        <PrivateRoute path="/userdetails" Component={UserDetails} exact />
        <PublicRoute path="/signup" Component={SignUp} exact />
        <PublicRoute path="/login" Component={Login} exact />
        <Route path="*">
          <Error />
        </Route> 
        </Switch>
  
    </div>
_);
}
