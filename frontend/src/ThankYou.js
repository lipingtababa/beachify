import React from 'react';
import './ThankYou.css';
import 'react-input-range/lib/css/index.css';


const ThankYou = ({setSubmitted}) => {
  // const myRand = () => {
  //   let r = 50
  //   while (40 < r && r < 60) {
  //     r = Math.random() * 100
  //   }
  //   return r
  // };
  //
  // const renderStar = () => {
  //     const delay = Math.random() + 's';
  //     el.src            = 'https://dl.dropboxusercontent.com/s/soxcov4m81dx55l/star.svg'
  //     el.className      = 'glitter-star'
  //     el.style.top      = myRand() + '%'
  //     el.style.left     = myRand() + '%'
  //     el.style.animationDelay       = delay
  //     el.style.msAnimationDelay     = delay
  //     el.style.webkitAnimationDelay = delay
  //     el.style.monAnimationDelay    = delay
  //
  //   return <img src={'https://dl.dropboxusercontent.com/s/soxcov4m81dx55l/star.svg'}
  //
  //   />
  // };
  return (
    <div className="thank-you">
      <div className="you-earned">
        {/*{Array.apply(null, Array(5)).map(renderStar)}*/}
        You just helped the Earth and earned <div className="stars-earned">{Math.floor(Math.random() * 20) + 35}</div>seastars!
      </div>
      <br />
      <div>
        How awesome is that!?
      </div>
      <br />
      <div>
        Make a photo or video and share with your friends on:
      </div>
      <img className="social" src="https://icon-library.net/images/facebook-icon-transparent-background/facebook-icon-transparent-background-14.jpg" alt="facebook"/>
      <img className="social" src="https://image.freepik.com/free-vector/instagram-icon_1057-2227.jpg" alt="instagram"/>
      <img className="social" src="https://image.shutterstock.com/image-photo/image-260nw-1273064443.jpg" alt="instagram"/>

      <br />
      <button
        className="continue-button"
        onClick={() => setSubmitted(false)}
      >
        Continue the fun!
      </button>
    </div>
  );
};

export default ThankYou;
