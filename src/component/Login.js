import React from "react";
import "../style/loginStyle.css";
import loinImg from "../assets/image/login.png";
import appLogo from "../assets/image/favicon.svg";
import googleImg from "../assets/image/google.svg";
import firebase from "./firebase.js";
import { auth } from "firebase/auth";
// import { async } from "@firebase/";
function Login() {
  const handleAuth = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider);
      // User signed in with Google successfully
    } catch (error) {
      // Handle errors
      console.error(error.message);
    }
  };

  return (
    <div className="login">
      <div className="login-Container">
        <div className="login-form">
          <div className="App-logo">
            <img src={appLogo} alt="logo" className="logoImg"></img>
            <h2 className="logo-heading">Disney + Hotstar</h2>
          </div>
          <div className="form-heading">
            <h1 className="form-heading-h1">Sign In</h1>
            <p className="form-para">Login to stay connected</p>
          </div>
          <form className="form-main">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              placeholder="xyz@example.com"
              className="form-input"
            ></input>
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="xxxx"
              className="form-input"
            ></input>
            <div className="input-checkbox">
              <span>
                <input type="checkbox" className="input_check"></input>
                Remember Me
              </span>
              <span className="forget">Forget password?</span>
            </div>
            <div className="login-button">
              <button type="submit" className="btn-submit">
                Sign In
              </button>
            </div>
            <div className="google-button" onClick={handleAuth}>
              <span className="btn-para">or sign in other acounts?</span>
              <img src={googleImg} alt="google" className="google-image"></img>
            </div>
          </form>
        </div>
      </div>
      <div className="login-img">
        <img src={loinImg} alt="login" className="loginImg"></img>
      </div>
    </div>
  );
}

export default Login;
