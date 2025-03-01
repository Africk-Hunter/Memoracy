import React from 'react';
import '../styles/Hero.scss';

function Hero() {
  return (
    <div className="hero">
      <section className="taglineSection">
        <h1 className="tagline">Efficient Learning<br /> Long-Term Results</h1>
        <p className="taglineDescription">Use Spaced Repetition to Learn More in Less Time.</p>
      </section>
      <button className="CTAButton shadowAndBorder buttonType">Get Started</button>
      <section className="heroCards">
        <div className="heroCardExt shadowAndBorder cardOne">
          <div className="heroCardInner">
            <h2 className="heroCardTitle">Day One</h2>
            <p className="heroCardDescription">Draw a cube with all its sides facing towards a single point on the horizon (vanishing point)
            </p>
          </div>
        </div>
        <div className="heroCardExt shadowAndBorder cardTwo">
          <div className="heroCardInner">
            <h2 className="heroCardTitle">Day One</h2>
            <p className="heroCardDescription">Draw a cube with all its sides facing towards a single point on the horizon (vanishing point)
            </p>
          </div>
        </div>
        <div className="heroCardExt shadowAndBorder cardThree">
          <div className="heroCardInner">
            <h2 className="heroCardTitle">Day One</h2>
            <p className="heroCardDescription">Draw a cube with all its sides facing towards a single point on the horizon (vanishing point)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
