import React from 'react';
import '../styles/Navbar.scss';

function NavbarLoggedOut() {
  return (
    <section className="navbar">
      <div className="unLoggedInNavButton shadowAndBorder title">Memoracy</div>
      <a className="unLoggedInNavButton shadowAndBorder buttonType" href='/login'>
        <img src="/images/profile.svg" alt="" className="logInImg" />
        <p className="logInText">Log In</p>
      </a>
    </section>
  );
}

export default NavbarLoggedOut;
