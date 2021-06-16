import React, { useState, createContext } from "react";
import * as firebase from "firebase";

import {
  LoginRequest,
  RegisterRequest,
  GoogleLoginRequest,
  GoogleLogout,
} from "./authentication-service";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(undefined);
  const [googleUser, setGoogleUser] = useState(undefined);
  const [error, setError] = useState(undefined);

  const GoogleSignIn_Config = {
    iosClientId:
      "207443081304-ghrcm7p265715sc9q8g0uf5h3ed35m6s.apps.googleusercontent.com",
    androidClientId:
      "207443081304-l0geeen620m3epvbnkmkl45jmps1ga8g.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  };

  firebase.auth().onAuthStateChanged((userInfo) => {
    if (userInfo) {
      setUser(userInfo);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    LoginRequest(email, password)
      .then((userInfo) => {
        setUser(userInfo);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.toString().slice(6));
        setIsLoading(false);
      });
  };

  const googleSignIn = () => {
    setIsLoading(true);
    GoogleLoginRequest(GoogleSignIn_Config)
      .then((result) => {
        if (result.type === "success") {
          setGoogleUser(result);
          console.log(result);
          setIsLoading(false);
        }
        if (result.type === "cancel") {
          setError("Google Sign-In Canceled!");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, repatedPassword) => {
    setIsLoading(true);
    if (password !== repatedPassword) {
      setError("Passwords do not match");
      return;
    }
    RegisterRequest(email, password)
      .then((userInfo) => {
        setUser(userInfo);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.toString().slice(6));
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    if (!googleUser.type) {
      setUser(undefined);
      firebase.auth().signOut();
      console.log("LOGOUT!!");
    } else {
      setGoogleUser(undefined);
      GoogleLogout(googleUser.accessToken, GoogleSignIn_Config);
      console.log("Google LOGOUT!!");
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user || !!googleUser,
        user,
        googleUser,
        isLoading,
        error,
        onLogin,
        onRegister,
        googleSignIn,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
