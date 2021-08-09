import firebase from "firebase/app";

export const signUp = (email, password) => {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(res => console.log("res", res));
};
