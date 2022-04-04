import React from 'react';

const Hero = ({ text, links }) => {
  return (
    <>
      <div className="col hero-col hidden">
        <h1 className="hero-text">{text}</h1>
        {links.map((link, index) => {
          return (
            <a key={index} className="hero-links" href="/">
              {link}
            </a>
          );
        })}
      </div>
      <div className="col hero-col">
        <h1 className="hero-text">{text}</h1>
        {links.map((link, index) => {
          return (
            <a key={index} className="hero-links" href="/">
              {link}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Hero;
