import React, { useState } from "react";
import "./RandomQuote.css";
import Twitter_Icon from "../assets/twitter-x-logo.png";
import Refresh_Icon from "../assets/refresh-icon.png";

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    text: "Tough times build strong men.",
    author: "G. Michael Hopf.",
  });
  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">{quote.author}</div>
          <div className="icons">
            <img src={Refresh_Icon} alt="" />
            <img src={Twitter_Icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
