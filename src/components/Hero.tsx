import React from 'react';
import '../styles/Hero.scss';

function Hero() {
  return (
    <div className="hero">
      <section className="taglineSection">
        <h1 className="tagline">Efficient Learning<br /> Long-Term Results</h1>
        <p className="taglineDescription">Use Spaced Repetition to Learn More in Less Time.</p>
      </section>
      <a className="CTAButton shadowAndBorder buttonType" href='/login'>Get Started</a>
      <section className="heroCards">
        <HeroCard cardTitle="Day One" cardText="Learn the basics of perspective by drawing simple cubes in one-point perspective." cardNumber='cardOne' />
        <HeroCard cardTitle="Day Two" cardText="Practice two-point perspective by drawing cubes from different angles." cardNumber='cardTwo' />
        <HeroCard cardTitle="Day Three" cardText="Master three-point perspective by drawing cubes with a vanishing point above or below the horizon." cardNumber='cardThree' />
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
