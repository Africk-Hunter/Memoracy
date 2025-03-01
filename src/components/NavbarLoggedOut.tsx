import React from 'react';
import '../styles/Navbar.scss';

function NavbarLoggedOut() {
  return (
    <section className="navbar">
      <div className="unLoggedInNavButton shadowAndBorder title">Memoracy</div>
      <div className="unLoggedInNavButton shadowAndBorder buttonType">
        <img src="/images/profile.svg" alt="" className="logInImg" />
        <p className="logInText">Log In</p>
      </div>
    </section>
  );
}

export default NavbarLoggedOut;
