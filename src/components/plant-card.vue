<template>
  <div class="plant-card" @click="goToPlantDetails(plant.id)">
    <h3>{{ plant.name }}</h3>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "PlantCard",
  props: ["plant"],
  setup() {
    const router = useRouter();

    const goToPlantDetails = (plantId: string) => {
      router.push({
        name: "PlantDetails",
        params: { id: plantId },
      });
    };

    return {
      goToPlantDetails,
    };
  },
});
</script>

<style>
.plant-card {
  border: 1px solid black;
}
</style>
