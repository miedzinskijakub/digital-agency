import React, { Component } from 'react';
import './App.css';
import Home from './views/Home.js';
import Contact from './views/Contact.js';
import About from './views/About.js';
import Projects from './views/Projects.js';
import Services from './views/Services.js';
import MainTemplate from './templates/MainTemplate/MainTemplate'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <MainTemplate>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/services" component={Services} />

        </div>
        </MainTemplate>
      </Router>
    );
  }
}

export default App;
