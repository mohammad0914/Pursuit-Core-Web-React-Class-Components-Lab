import React from "react";
import "./Ad.css";

export const adInfo = [
  {
    src: "https://placeimg.com/200/200/arch",
    text: "Doctors hate THIS ONE WEIRD TRICK",
  },
  {
    src: "https://placeimg.com/200/200/nature",
    text: "You won't believe what happened next!",
  },
  {
    src: "http://placekitten.com/g/200/200",
    text: "Celebs: Where are they now??",
  },
];

const Ad = () => {
  const index = Math.floor(Math.random() * adInfo.length);
  const ad = adInfo[index];

  return (
    <div className="Ad" data-testid="ad">
      <img src={ad.src} alt="cool ad" />
      <p data-testid="ad-text">{ad.text}</p>
    </div>
  );
};

export default Ad;
