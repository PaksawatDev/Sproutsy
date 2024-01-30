<template>
  <h2>plant list</h2>
  <div v-for="plant in plantStore.plants">
    <PlantCard :plant="plant" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PlantCard from "@/components/plant-card.vue";
import { usePlantStore } from "@/stores/store";

export default defineComponent({
  name: "PlantList",
  components: {
    PlantCard,
  },
  setup() {
    const plantStore = usePlantStore();
    plantStore.fetchPlants();
    return {
      plantStore,
    };
  },
});
</script>
