import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Auth: React.FC = () => {

    const [option, setOption] = useState("Sign In");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pwError, setPwError] = useState("");


    function checkPassword(password: string) {
        if (password.length < 6) {
            setPwError("Password must be at least 6 characters long");
            console.log(pwError)
            return false;
        } else if (password.length > 20) {
            setPwError("Password must be less than 20 characters long");
            console.log(pwError)
            return false;
        }
        setPwError("");
        return true;

    }

    interface AuthFormEvent extends React.FormEvent<HTMLFormElement> { }

    function defaultSignUp(e: AuthFormEvent): void {
        e.preventDefault();
        if (checkPassword(password)) {
            handleSignUp();
            return;
        }
        console.log('Password did not meet requirements.');
    }

    function handleSignUp() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    function handleSignIn(e: AuthFormEvent): void {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                window.location.href = '/'; /* Place holder */
            })
            .catch((error) => {
                console.log('Invalid email or password. Please try again')
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <div className="auth">
            <section className="shadowAndBorder loginBox ">
                <section className="text">
                    <h1 className="loginTagline">{option === 'Sign In' ? 'Welcome Back' : 'Let\'s get started!'}</h1>
                    <p className="loginSubTag">Enter your Memoracy account details</p>
                </section>
                <section className="optionType">
                    <OptionType typeText="Sign In" option={option} setOption={setOption} />
                    <OptionType typeText="Sign Up" option={option} setOption={setOption} />
                </section>
                <form className="loginForm" onSubmit={option === 'Sign In' ? (e) => handleSignIn(e) : (e) => defaultSignUp(e)}>
                    <input type="email" placeholder="email@domain.com" className="loginInput" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" className="loginInput" onChange={(e) => setPassword(e.target.value)} />
                    <button className="loginButton email shadowAndBorder">Continue with Email</button>
                </form>
                <hr className="loginDivider" />
                <button className="loginButton google">
                    <img src="/images/google.svg" alt="" className="googleImg" />
                    Continue with Google
                </button>
            </section>
        </div>
    );
};

interface OptionTypeProps {
    typeText: string;
    option: string;
    setOption: (option: string) => void;
}

function OptionType({ typeText, option, setOption }: OptionTypeProps) {
    return (
        <button className={option === typeText ? 'optionButton active' : 'optionButton'} onClick={() => setOption(typeText)}>{typeText}</button>
    )
}
export default Auth;
