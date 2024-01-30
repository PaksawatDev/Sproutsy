<template>
  <h1>Home !</h1>
  <suspense>
    <PlantList />
  </suspense>
</template>

<script lang="ts" setup>
import PlantList from "@/components/plant-list.vue";
import { defineComponent } from "vue";
</script>
