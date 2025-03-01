import React from 'react';
import '../styles/Navbar.scss';

const image_paths = {
  PlusIcon: '/images/Plus.svg',
  PlayingCardIcon: '/images/PlayingCard.svg',
  GearIcon: '/images/Gear.svg',
}


function NavbarLoggedIn() {
  return (
    <section className="navbar">
      <div className="LoggedInNavBar shadowAndBorder">
        <div className="loggedInSection title">Memoracy</div>

        <nav className="loggedInSection">
          <NavButton navText="My Decks" navPicture={image_paths.PlayingCardIcon} />
          <NavButton navText="Create a Deck" navPicture={image_paths.PlusIcon} />
          <NavButton navText="Settings" navPicture={image_paths.GearIcon} />
        </nav>

      </div>
    </section>
  );
}

interface NavButtonProps {

  navText: string;
  navPicture: string;

}

function NavButton( {navText, navPicture}: NavButtonProps ) {
  return (
    <button className='navButton'>
      <img src={navPicture} alt="" className="navImg" />
      <p className="navText">{navText}</p>
    </button>
  );
}

export default NavbarLoggedIn;
