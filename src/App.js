import React from 'react';
import './SCSS/App.scss';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/navbar/navbar';
import Calendar from './Components/calendar/calendar';
import Signup from './Components/signup/signup';
import Home from './Components/home/home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/signup" component={Signup} />
            <Route path="/calendar" component={Calendar} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
