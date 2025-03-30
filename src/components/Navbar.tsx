import React, { useEffect, useState } from 'react';
import '../styles/Navbar.scss';
import NavbarLoggedIn from "./NavbarLoggedIn";
import NavbarLoggedOut from "./NavbarLoggedOut";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useLocation } from 'react-router-dom';

function Navbar() {
    const [user, setUser] = useState(auth.currentUser);
    const location = useLocation(); 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            {location.pathname !== "/" && user ? <NavbarLoggedIn /> : <NavbarLoggedOut />}
        </>
    );
}

export default Navbar;