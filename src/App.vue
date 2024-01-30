<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";
import { usePlantStore } from "./stores/store";

const isLoggedIn = ref(false);
const plantStore = usePlantStore();

let auth: any;
onMounted(async () => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then();
};

onAuthStateChanged(getAuth(), (user) => {
  if (!user) {
    router.push("/sign-in");
  }
});
</script>

<template>
  <header>
    <div class="wrapper bg-gray-500">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/sign-in">login</RouterLink>
        <RouterLink to="/sign-up">signup</RouterLink>
        <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
