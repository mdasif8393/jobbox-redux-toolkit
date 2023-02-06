
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBO_a-cP0P3UyTnamsaiHSORMdiFMyR5YE",
  authDomain: "jobbox-test-1.firebaseapp.com",
  projectId: "jobbox-test-1",
  storageBucket: "jobbox-test-1.appspot.com",
  messagingSenderId: "610157055436",
  appId: "1:610157055436:web:b23fc1b7d26812ab742169"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;