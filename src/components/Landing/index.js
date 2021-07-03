import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

import Navbar from "./Navbar";

var firebaseConfig = {
  apiKey: "AIzaSyDTeiguN-KGxWB9Oi-p8KQpZP0UvdJkoP0",
  authDomain: "whatthehack-2021-750fe.firebaseapp.com",
  projectId: "whatthehack-2021-750fe",
  storageBucket: "whatthehack-2021-750fe.appspot.com",
  messagingSenderId: "430683612247",
  appId: "1:430683612247:web:4d9055b97557e85df0af12",
  measurementId: "G-8ZTM8B8N8S",
};

try {
  firebase.app();
} catch (e) {
  firebase.initializeApp(firebaseConfig);
}

const Landing = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInError, setSignInError] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [sentPasswordResetEmail, setSentPasswordResetEmail] = useState(false);

  const handleEmailChange = (event) => {
    const target = event.target;
    const value = target.value;

    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const target = event.target;
    const value = target.value;

    setPassword(value);
  };

  const emailLoginProc = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return;
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (user) {
        console.log(user.user.uid);
      })
      .catch(function (error) {
        console.log(error.code);
        console.log(error.message);
        setSignInError(error.message);
      });
  };

  const resetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        // Email sent.
        setSentPasswordResetEmail(true);
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  const forgotPasswordComponent = (
    <>
      <span
        role="button"
        class="mb-3 text-md cursor-pointer text-gray-700"
        onClick={() => {
          setForgotPassword(false);
          setSentPasswordResetEmail(false);
          setEmail("");
        }}
        onKeyDown={() => {
          setForgotPassword(false);
          setSentPasswordResetEmail(false);
          setEmail("");
        }}
        tabIndex={0}
      >
        {"< Back to log in"}
      </span>
      <div class="mb-4">
        <div class="flex flex-row">
          <span class="font-semibold text-lg">Reset Your Password</span>
        </div>

        <p>
          Provide us with your log in email to send your reset credentials to.
        </p>
      </div>
      <span class="font-semibold text-lg">Email</span>
      <input
        name="email"
        autoComplete="email"
        type="email"
        class="w-full rounded bg-gray-300 px-4 py-4 mb-4"
        placeholder="john_doe@mymail.sutd.edu.sg"
        value={email}
        onChange={handleEmailChange}
        data-testid="loginEmail"
      />
    </>
  );

  const loginComponent = (
    <>
      <span class="font-semibold text-lg">Email</span>
      <input
        name="email"
        autoComplete="email"
        type="email"
        class="w-full rounded bg-gray-300 px-4 py-4 mb-4"
        placeholder="john_doe@gmail.com"
        value={email}
        onChange={handleEmailChange}
        data-testid="loginEmail"
      />
      <div class="flex flex-row">
        <span class="font-semibold text-lg">Password</span>
        <span
          role="button"
          class="text-md ml-auto text-gray-700 cursor-pointer"
          onClick={() => {
            setForgotPassword(true);
            setEmail("");
            setPassword("");
          }}
          onKeyDown={() => {
            setForgotPassword(true);
            setEmail("");
            setPassword("");
          }}
          tabIndex={0}
        >
          Forgot your password? &gt;
        </span>
      </div>
      <input
        name="current-password"
        autoComplete="current-password"
        type="password"
        class="w-full rounded bg-gray-300 px-4 py-4 mb-4"
        placeholder="********"
        value={password}
        onChange={handlePasswordChange}
        data-testid="loginPassword"
      />
    </>
  );

  return (
    <>
      <Navbar />
      <div class="flex flex-col max-w-7xl mx-auto h-screen">
        <div class="flex my-auto flex-col px-2 md:mx-48">
          {forgotPassword ? (
            <>
              <span class="text-4xl md:text-6xl font-bold mb-4">
                Forgot Password
              </span>
            </>
          ) : (
            <>
              <span class="text-4xl md:text-6xl font-bold mb-4">Sign In</span>
            </>
          )}
          <div class="flex flex-col rounded-lg bg-gray-200 p-4 px-4 mb-4">
            {forgotPassword ? forgotPasswordComponent : loginComponent}
          </div>
          <button
            class="bg-green-500 rounded-lg p-4 text-white"
            onClick={forgotPassword ? resetPassword : emailLoginProc}
            data-testid="loginBtn"
          >
            {forgotPassword ? "Reset Password" : "Log In"}
          </button>
        </div>
        {(signInError || (forgotPassword && sentPasswordResetEmail)) && (
          <div
            class={`flex justify-center items-center mt-4 p-4 ${
              forgotPassword && sentPasswordResetEmail
                ? "bg-green-500"
                : "bg-red-500"
            } text-white`}
          >
            <div class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-info w-5 h-5 mx-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <div class="w-full" data-testid="loginErrorMessage">
              {forgotPassword && sentPasswordResetEmail
                ? "Email sent!"
                : signInError}
            </div>
            <button
              class="flex flex-auto flex-row-reverse"
              onClick={(e) => {
                e.preventDefault();
                if (signInError) setSignInError(false);
                if (forgotPassword && sentPasswordResetEmail)
                  setSentPasswordResetEmail(false);
              }}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="hover:text-red-600 cursor-pointer rounded-full w-5 h-5"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Landing;
