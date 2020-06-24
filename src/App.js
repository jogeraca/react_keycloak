import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Secured from './Secured';
import './App.css';
import People from './People';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <ul>
            <li>
              <Link to="/">public component</Link>
            </li>
            <li>
              <Link to="/secured">secured component</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
          </ul>
          <Route exact path="/" component={Welcome} />
          <Route path="/secured" component={Secured} />
          <Route path="/people" component={People} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
