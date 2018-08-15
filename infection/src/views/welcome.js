import React from 'react';
import infectionLogo from '../Infection.jpg';
import Login from '../components/login';

const Welcome = () => {
 return <div>
    <header className="welcome-header">
      <img src={infectionLogo} className="App-infection-logo" alt="logo" />
      <h1 className="welcome-title">Welcome to the team!</h1>
        <p>Our mission is to stop infectious outbreaks threatening the United States</p>
    </header>
    <Login></Login>
  </div>
}

export default Welcome;