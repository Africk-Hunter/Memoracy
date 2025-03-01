import React from 'react';
import '../styles/Navbar.scss';
import NavbarLoggedIn from "./NavbarLoggedIn";
import NavbarLoggedOut from "./NavbarLoggedOut";

function Navbar() {
  return (
    <NavbarLoggedOut />
  );
}

export default Navbar;
