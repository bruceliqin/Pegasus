import React, { Component } from "react";
import { Route, HashRouter as Router, Switch, Redirect} from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Schedule from "./pages/Schedule/Schedule";
//import './styles.css';


class App extends React.Component {
  render() {
      return (
        <main>
        <Router>
            <Switch>
                <Route exact path={`/`} component={Home}/>
                <Route exact path={`/login`} render={() => <Login/>} />
                <Route exact path={`/signup`} render={() => <Signup/>} />
                <Route exact path={`/dashboard`} render={() => <Dashboard/>} />
                <Route exact path={`/schedule/:MailID?`} render={() => <Schedule/>} />
            </Switch>
        </Router>
      </main>
      )
  }
}

export default App;