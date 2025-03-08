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
        <HeroCard cardTitle="Day One" cardText="Draw a cube with all its sides facing towards a single point on the horizon (vanishing point)" cardNumber='cardOne' />
        <HeroCard cardTitle="Day Two" cardText="Draw a cube with all its sides facing towards a single point on the horizon (vanishing point)" cardNumber='cardTwo' />
        <HeroCard cardTitle="Day Three" cardText="Draw a cube with all its sides facing towards a single point on the horizon (vanishing point)" cardNumber='cardThree' />
      </section>
    </div>
  );
}

interface HeroCardProps {
  cardTitle: string;
  cardText: string;
  cardNumber: string;
}


function HeroCard({ cardTitle, cardText, cardNumber }: HeroCardProps) {
  return (
    <div className={`heroCardExt shadowAndBorder ${cardNumber}`}>
      <div className="heroCardInner">
        <h2 className="heroCardTitle">{cardTitle}</h2>
        <p className="heroCardDescription">{cardText}</p>
      </div>
    </div>
  )
}

export default Hero;
