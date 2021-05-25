import * as firebase from "firebase";

export const LoginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const RegisterRequest = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const CheckSession = (user) => firebase.auth().onAuthStateChanged(user);

export const Logout = () => firebase.auth().signOut();
