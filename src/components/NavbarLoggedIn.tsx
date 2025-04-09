import React from 'react';
import '../styles/Navbar.scss';
import { auth } from "../firebaseConfig";

const image_paths = {
  PlusIcon: '/images/Plus.svg',
  PlayingCardIcon: '/images/PlayingCard.svg',
  GearIcon: '/images/Gear.svg',
  LogOut: '/images/LogOut.svg',
}


function NavbarLoggedIn() {
  return (
    <section className="navbar">
      <div className="LoggedInNavBar shadowAndBorder">
        <a className="loggedInSection title" href='../'>Memoracy</a>

        <nav className="loggedInSection">
          <NavButton navText="My Decks" navPicture={image_paths.PlayingCardIcon} link='../decks'/>
          <NavButton navText="Settings" navPicture={image_paths.GearIcon} link='../settings'/>
          <NavButton navText="Log Out" navPicture={image_paths.LogOut} link='../'/>
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

  function firebaseSignOut(){
    auth.signOut().then(() => {
      console.log('Signed Out')
    }).catch((error) => {
      console.error('Sign out error:', error);
    });
  }

  return (
    <a className='navButton' href={link} onClick={navText === 'Log Out' ? firebaseSignOut : undefined}>
      <img src={navPicture} alt="" className="navImg" />
      <p className="navText">{navText}</p>
    </a>
  );
}

export default NavbarLoggedIn;
