import React, { useState } from "react";
import "./RandomQuote.css";

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
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
