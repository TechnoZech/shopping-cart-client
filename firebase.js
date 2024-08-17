import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDsJp9TjfIePzz2brJQ0BB77J66dDbAJAc",
	authDomain: "shopping-cart-client.firebaseapp.com",
	projectId: "shopping-cart-client",
	storageBucket: "shopping-cart-client.appspot.com",
	messagingSenderId: "687700944535",
	appId: "1:687700944535:web:4fe79fba66cdee812e6bd2",
	measurementId: "G-G2EQ30ZTRC",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
