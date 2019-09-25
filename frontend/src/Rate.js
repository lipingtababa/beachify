import React from 'react';
import './App.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const Rate = ({rate, setRate}) => {
  return (
    <>
      <div className="question">
        <h3>How clean is the beach you're at?</h3>
        <InputRange
          className="input-range"
          maxValue={10}
          minValue={0}
          value={rate}
          onChange={value => setRate(value)}
        />
      </div>
      <div className="question">
        <h3>What is the most common trash here?</h3>
        <div className="checkbox">
          <input type="checkbox"/>
          <label>Plastic</label>
        </div>
        <div className="checkbox">
          <input type="checkbox"/>
          <label>Cans / bottles</label>
        </div>
        <div className="checkbox">
          <input type="checkbox"/>
          <label>Other</label>
        </div>
      </div>
    </>
  );
};

export default Rate;
