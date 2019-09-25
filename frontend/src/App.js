import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';


const App = () => {
  const [rate, setRate] = React.useState(7);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="points-section">
          <img
            src="https://pics.clipartpng.com/midle/Blue_Starfish_PNG_Clip_Art-1718.png"
            className="navbar-img points-img"
            alt="points"/>
          <p className="points">3607</p>
        </div>
        <div className="user-section">
          <p className="username">Jay Bravo</p>
          <img
            src="https://bramdejager.files.wordpress.com/2019/05/bramdejager-600x600.png"
            className="navbar-img avatar-img"
            alt="points"/>
        </div>
      </nav>
      <div className="main">
        <img
          src="https://i.etsystatic.com/18985996/r/il/976b61/1727027316/il_1588xN.1727027316_7ozm.jpg"
          className="main-img"
          alt="points"/>
        <p>How clean the beach you're at?</p>
        <InputRange
          className="input-range"
          maxValue={10}
          minValue={0}
          value={rate}
          onChange={value => setRate(value)}
        />
        <p>What is the most common trash here?</p>
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
};

export default App;
