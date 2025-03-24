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
          <NavButton navText="My Decks" navPicture={image_paths.PlayingCardIcon} link='../decks'/>
          {/* <NavButton navText="Create a Deck" navPicture={image_paths.PlusIcon} link='../create-deck'/> */}
          <NavButton navText="Settings" navPicture={image_paths.GearIcon} link='../settings'/>
        </nav>

      </div>
    </section>
  );
}

interface NavButtonProps {

  navText: string;
  navPicture: string;
  link: string;
}

function NavButton( {navText, navPicture, link}: NavButtonProps ) {
  return (
    <a className='navButton' href={link}>
      <img src={navPicture} alt="" className="navImg" />
      <p className="navText">{navText}</p>
    </a>
  );
}

export default NavbarLoggedIn;
