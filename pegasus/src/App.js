import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Schedule from "./pages/Schedule/Schedule";
import UPS from "./pages/UPS/UPS";
import Demo from "./pages/Demo/Demo";
//import './styles.css';


class App extends React.Component {
  render() {
      return (
        <main>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/UPS" component={UPS} />
                <Route exact path="/schedule" component={Schedule} />
                <Route exact path="/demo" component={Demo} />
            </Switch>
        </Router>
      </main>
      )
  }
}

export default App;