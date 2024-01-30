import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChPcs5MnVoqVCNKNZFkEMw0nsmElZSqVM",
  authDomain: "sproutsy-3e59e.firebaseapp.com",
  projectId: "sproutsy-3e59e",
  storageBucket: "sproutsy-3e59e.appspot.com",
  messagingSenderId: "74123636205",
  appId: "1:74123636205:web:ccefef10bfdd0233120be4",
  measurementId: "G-W7MTKYNT37",
};
initializeApp(firebaseConfig);
const analytics = getAnalytics();
export const db = getFirestore(initializeApp(firebaseConfig));
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
