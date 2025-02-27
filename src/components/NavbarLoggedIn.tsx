import React from 'react';
import '../styles/Navbar.scss';

function NavbarLoggedIn() {
  return (
    <section className="navbar">
      <div className="LoggedInNavBar shadowAndBorder">
        <div className="loggedInSection title">Memoracy</div>

        <div className="loggedInSection">
          <button className="navButton">
            <img src="" alt="" className="navImg" />
            <p className="navText">My Decks</p>
          </button>
          <button className="navButton">
            <img src="" alt="" className="navImg" />
            <p className="navText">Create a deck</p>
          </button>
          <button className="navButton">
            <img src="" alt="" className="navImg" />
            <p className="navText">Settings</p>
          </button>
        </div>

      </div>
    </section>
  );
}

export default NavbarLoggedIn;
