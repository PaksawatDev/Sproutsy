<template>
  <section>
    <h1>Sign In</h1>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="password" v-model="password" />
    <p v-if="errMsg">{{ errMsg }}</p>
    <button @click="register">Sign in</button>
    <button @click="signInWithGoogle">Sign in with Google</button>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import router from "@/router";

const email = ref("");
const password = ref("");
const errMsg = ref(); // ERROR message
const auth = getAuth();
const register = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      router.push("/");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
