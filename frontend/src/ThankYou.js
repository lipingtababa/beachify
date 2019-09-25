import React from 'react';
import logo from './logo.svg';
import './ThankYou.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';


const ThankYou = () => {

  return (
    <>
      <div>
        You just helped the Earth and earned <div className="stars-earned">54</div> new stars!
      </div>
      <br />
      <div>
        How awesome is that!?
      </div>
      <div>
        Share with your friends!
      </div>
    </>
  );
};

export default ThankYou;
