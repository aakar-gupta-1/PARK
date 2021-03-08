import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Home2, Home3} from "./Components";
import './App.css';
import Axios from 'axios';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
        </Switch>
        <Switch>
          <Route path="/home2" exact component={() => <Home2 />} />
        </Switch>
        <Switch>
          <Route path="/home3" exact component={() => <Home3 />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;