import React from 'react';
import '../styles/Navbar.scss';

function NavbarLoggedOut() {
  return (
    <section className="navbar">
      <a className="unLoggedInNavButton shadowAndBorder title buttonType" href='../'>Memoracy</a>
      <a className="unLoggedInNavButton shadowAndBorder buttonType" href='/login'>
        <img src="/images/profile.svg" alt="" className="logInImg" />
        <p className="logInText">Log In</p>
      </a>
    </section>
  );
}

export default NavbarLoggedOut;
