import React, { Component } from 'react';
import Bills from './BILL/Main'
import Senator from './SENATOR/Main'
import HouseMember from './HOUSE MEMBER/Main'
import Reports from './REPORTS/Main'
import Header from './Header'
import './App.css'

import  { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <Route exact={true} path="/Bills" component={Bills} />
            <Route exact={true} path="/Senators" component={Senator} />
            <Route exact={true} path="/HouseMember" component={HouseMember} />
            <Route exact={true} path="/Reports" component={Reports} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
