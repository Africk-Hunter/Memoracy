import React, { use } from 'react';
import '../styles/Navbar.scss';
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebaseConfig";

function NavbarLoggedOut() {
  
  const navigate = useNavigate();

  function handleLoginRedirect() {
    if (auth.currentUser) {
      navigate('/decks');
    } else {
      navigate('/login');
    }
  }

  return (
    <section className="navbar">
      <a className="unLoggedInNavButton shadowAndBorder title buttonType" href='../'>Memoracy</a>
      <button className="unLoggedInNavButton shadowAndBorder buttonType" onClick={handleLoginRedirect}>
        <img src="/images/profile.svg" alt="" className="logInImg" />
        <p className="logInText">Log In</p>
      </button>
    </section>
  );
}

export default NavbarLoggedOut;
