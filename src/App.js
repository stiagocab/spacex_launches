import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import "./css/styles.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="*" component={"ERROR 404"} />
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
