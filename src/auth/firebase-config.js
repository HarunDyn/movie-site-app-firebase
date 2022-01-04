import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyCg1fCEO8i7MQnM3SiMJPiVcADp_NI9XTw",
//     authDomain: "movie-app-1-6ec44.firebaseapp.com",
//     projectId: "movie-app-1-6ec44",
//     storageBucket: "movie-app-1-6ec44.appspot.com",
//     messagingSenderId: "950886341278",
//     appId: "1:950886341278:web:f4feb188157227da55398f"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDGFL6U9W_WwJQXVMH8EbLc9qkcIQbTFfY",
  authDomain: "movie-proj-user.firebaseapp.com",
  projectId: "movie-proj-user",
  storageBucket: "movie-proj-user.appspot.com",
  messagingSenderId: "756566850161",
  appId: "1:756566850161:web:f20a4d95862cd06a6079d0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
