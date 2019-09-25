import React from 'react';
import './App.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const Rate = ({rate, setRate, plastic, setPlastic, cans, setCans, other, setOther}) => {

  const togglePlastic = () => {
    setPlastic(!plastic);
  };

  const toggleCans = () => {
    setCans(!cans);
  };


  const toggleOther = () => {
    setOther(!other);
  };


  return (
    <>
      <div className="question">
        <h3>How clean is the beach you're at?</h3>
        <InputRange
          className="input-range"
          maxValue={5}
          minValue={0}
          value={rate}
          onChange={value => setRate(value)}
        />
      </div>
      <div className="question">
        <h3>What is the most common trash here?</h3>
        <button className={`type-toggle ${plastic ? 'toggled' : ''}`} onClick={togglePlastic}>Plastic</button>
        <button className={`type-toggle ${cans ? 'toggled' : ''}`} onClick={toggleCans}>Cans / bottles</button>
        <button className={`type-toggle ${other ? 'toggled' : ''}`} onClick={toggleOther}>Other</button>
      </div>
    </>
  );
};

export default Rate;
