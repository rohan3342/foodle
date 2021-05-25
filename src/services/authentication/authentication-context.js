import React, { useState, createContext } from "react";
import { LoginRequest } from "./authentication-service";
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
        setError(err);
        setIsLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};