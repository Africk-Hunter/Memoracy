import React from "react";

const Auth: React.FC = () => {
    return (
        <div className="auth">
            <section className="shadowAndBorder loginBox ">
                <section className="text">
                    <h1 className="loginTagline">Welcome Back!</h1> {/* Change based on option selected */}
                    <p className="loginSubTag">Enter your Memoracy account details</p>
                </section>
                <section className="optionType">
                    <button className="optionButton active">Sign In</button>
                    <button className="optionButton">Sign Up</button>
                </section>
                <form className="loginForm">
                    <input type="text" placeholder="email@domain.com" className="loginInput" />
                    <input type="password" placeholder="Password" className="loginInput" />
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

export default Auth;
