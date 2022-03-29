import React, { Component } from "react";
import { Route, HashRouter as Router, Switch, Redirect} from "react-router-dom";
import Login from "./pages/Login/Login";
//import './styles.css';




class App extends React.Component {
  render() {
      return (
        <main>
        <Router>
            <Switch>
                <Route exact path={`/`} component={Login} /*exact*/ />
            </Switch>
        </Router>
      </main>
      )
  }
}

export default App;