import React from 'react';
import './SCSS/App.scss';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Layout from './Components/layout/layout';
import Calendar from './Components/calendar/calendar';
import Signup from './Components/signup/signup';
import Login from './Components/signup/login';
import Home from './Components/home/home';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <CookiesProvider>
        <Router>
          <div className="container">
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/calendar" component={Calendar} />
              </Switch>
            </Layout>
          </div>
        </Router>
      </CookiesProvider>
    );
  }
}

export default App;
