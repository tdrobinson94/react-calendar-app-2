import React from 'react';
import './SCSS/App.scss';
import Calendar from './Components/calendar/calendar';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <div>
            <a>Signup</a>
            <a>Login</a>
            <a>Calendar</a>
            <a>Settings</a>
          </div>
        </header>
        <Calendar />
      </div>
    );
  }
}

export default App;
