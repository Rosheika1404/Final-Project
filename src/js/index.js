//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

//firebase
var firebaseConfig = {
	apiKey: "AIzaSyDmcvti3lFlpQ6a4_wvSjHv1KBSeR5B_M0",
	authDomain: "palacecardgame-finalproject.firebaseapp.com",
	projectId: "palacecardgame-finalproject",
	storageBucket: "palacecardgame-finalproject.appspot.com",
	messagingSenderId: "515489580186",
	appId: "1:515489580186:web:ca7b9542a5a07ba7368b23",
	measurementId: "G-S3E1R944T5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
