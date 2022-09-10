  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBAL6N_PIsbgGUtMDXbDH8_rSWPzp2cvpg",
    authDomain: "projeto-clube-ded.firebaseapp.com",
    projectId: "projeto-clube-ded",
    storageBucket: "projeto-clube-ded.appspot.com",
    messagingSenderId: "734224910060",
    appId: "1:734224910060:web:bb27a8d493b0093bc507c9",
    measurementId: "G-Y9K6RSZJD0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  export default app
