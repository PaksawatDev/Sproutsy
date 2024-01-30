<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

if (!user) {
  router.push("/sign-in");
}
</script>
