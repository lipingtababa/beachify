import React from 'react';
import './App.css';
import 'react-input-range/lib/css/index.css';
import ThankYou from './ThankYou';
import Rate from './Rate';


const App = () => {
  const [rate, setRate] = React.useState(4);
  const [submitted, setSubmitted] = React.useState(false);
  const [plastic, setPlastic] = React.useState(false);
  const [cans, setCans] = React.useState(false);
  const [other, setOther] = React.useState(false);

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
        {submitted ?
          <ThankYou setSubmitted={setSubmitted}/> :
          <>
            <Rate
              rate={rate}
              setRate={setRate}
              setPlastic={setPlastic}
              plastic={plastic}
              other={other}
              setOther={setOther}
              cans={cans}
              setCans={setCans}
            />
            <button
              className="App-button"
              onClick={() => setSubmitted(true)}
            >
              Submit
            </button>
          </>}
      </div>

    </div>
  );
};

export default App;
