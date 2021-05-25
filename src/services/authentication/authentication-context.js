import React, { useState, createContext } from "react";
import { LoginRequest, RegisterRequest } from "./authentication-service";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(undefined);
  const [error, setError] = useState(undefined);

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

  const onRegister = (email, password, repatedPassword) => {
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

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
