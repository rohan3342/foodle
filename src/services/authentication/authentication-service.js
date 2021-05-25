import * as firebase from "firebase";

export const LoginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const RegisterRequest = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);
