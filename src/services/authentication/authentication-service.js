import * as firebase from "firebase";
import * as Google from "expo-google-app-auth";

export const LoginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const GoogleLoginRequest = (config) => Google.logInAsync(config);

export const RegisterRequest = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const CheckSession = (user) => firebase.auth().onAuthStateChanged(user);

export const Logout = () => firebase.auth().signOut();

export const GoogleLogout = (accessToken, config) =>
  Google.logOutAsync({ accessToken, ...config });
