import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyC5tL_DdyeaGAg11THk3Pz97Wnb1OuBEBg",
  authDomain: "goal-coach-e8620.firebaseapp.com",
  databaseURL: "https://goal-coach-e8620.firebaseio.com",
  projectId: "goal-coach-e8620",
  storageBucket: "",
  messagingSenderId: "710806315060"
};

export const firebaseApp = firebase.initializeApp(config);
