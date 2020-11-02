import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./view/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path={'/'} component={Home}/>
      </Router>
    </div>
  );
}

export default App;
