import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyAhzYC-YS16hxnQEtOQTD2AyCx68EEjvUw",
	authDomain: "crown-db-33e60.firebaseapp.com",
	projectId: "crown-db-33e60",
	storageBucket: "crown-db-33e60.appspot.com",
	messagingSenderId: "27510660406",
	appId: "1:27510660406:web:4db01d072fb1c8b0f46797",
	measurementId: "G-0ZQYS6FQ86",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
