import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";

const Auth: React.FC = () => {

    const [option, setOption] = useState("Sign In");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [messageBoxMessage, setMessageBoxMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    function displayMessage(message: string, type: string) {
        setMessageBoxMessage(message);
        setMessageType(type);
    }

    function checkPassword(password: string) {
        if (password.length < 6) {
            displayMessage("Password must be at least 6 characters long", "bad");
            console.log(messageBoxMessage)
            return false;
        } else if (password.length > 20) {
            displayMessage("Password must be less than 20 characters long", "bad");
            console.log(messageBoxMessage)
            return false;
        }
        setMessageBoxMessage("");
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
                displayMessage("Successfully created account!", "good");
                setEmail("");
                setPassword("");
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
                window.location.href = '/'; /* Placeholder */
            })
            .catch((error) => {
                displayMessage('Invalid email or password. Please try again', 'bad');
                console.log('Invalid email or password. Please try again')
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    function continueWithGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                const user = result.user;

                window.location.href = '/'; /* Placeholder */
            }).catch(function (error) {

                var errorCode = error.code;
                console.log(errorCode);

                var errorMessage = error.message;
                console.log(errorMessage);
                displayMessage(errorMessage, 'bad');
            });
    }

    return (
        <div className="auth">
            <MessageBox messageBoxMessage={messageBoxMessage} goodOrBad={messageType} />

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
                    <input type="password" placeholder="Password" autoComplete="off" className="loginInput" onChange={(e) => setPassword(e.target.value)} />
                    <button className="loginButton email shadowAndBorder">Continue with Email</button>
                </form>
                <hr className="loginDivider" />
                <button className="loginButton google" onClick={continueWithGoogle}>
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

interface MessageBoxProps {
    messageBoxMessage: string;
    goodOrBad: string;
}

function MessageBox({ messageBoxMessage, goodOrBad }: MessageBoxProps) {
    return (
        <section className={`messageBox shadowAndBorder ${goodOrBad}`}>
            <p className="messageBoxMessage">{messageBoxMessage}</p>
        </section>
    )
}

export default Auth;
