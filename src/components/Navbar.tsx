import React, { useEffect, useState } from 'react';
import '../styles/Navbar.scss';
import NavbarLoggedIn from "./NavbarLoggedIn";
import NavbarLoggedOut from "./NavbarLoggedOut";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

function Navbar() {
    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        // Cleanup the listener on component unmount
        return () => unsubscribe();
    }, []);

    return (
        <>
            {user ? <NavbarLoggedIn /> : <NavbarLoggedOut />}
        </>
    );
}

export default Navbar;