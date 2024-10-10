// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBVd2J92-oKNtu652ZgUD0ZuVC7FOTy_w",
  authDomain: "razoi-inc-fa532.firebaseapp.com",
  projectId: "razoi-inc-fa532",
  storageBucket: "razoi-inc-fa532.appspot.com",
  messagingSenderId: "229873743426",
  appId: "1:229873743426:web:d8bfeea7b49730c9285fdb",
  measurementId: "G-YCE7JEPRLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
