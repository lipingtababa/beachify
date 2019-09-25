import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img
          src="https://pics.clipartpng.com/midle/Blue_Starfish_PNG_Clip_Art-1718.png"
          className="img points-img"
          alt="points"/>
        <p className="points">3607</p>
        <p className="username">Jay Bravo</p>
        <img
          src="https://bramdejager.files.wordpress.com/2019/05/bramdejager-600x600.png"
          className="img avatar-img"
          alt="points"/>
      </nav>
      <div className="main">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          How clean is the place you're in?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit
        </a>
      </div>

    </div>
  );
}

export default App;
