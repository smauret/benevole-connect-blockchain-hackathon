import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from '../material-ui/Home'
import GridProfile from '../material-ui/GridProfile'

function About() {
  return <h2>Organisateur</h2>;
}

function Users() {
  return <h2>Profil</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>

          <Link to="/">Home </Link>

          <Link to="/user/">Bénévole</Link>

        </nav>

        <Route path="/" exact component={Home}/>
        <Route path="/organizer/" component={About}/>
        <Route path="/user/" component={GridProfile}/>
      </div>
    </Router>
  );
}

export default AppRouter;
