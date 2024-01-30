<template>
  <div v-if="plantDetails">
    <h2>{{ plantDetails.name }}</h2>
    <div>
      <div>
        <p>water</p>
        <p>{{ plantDetails.water }} weeks</p>
      </div>
      <div>
        <p>care</p>
        <p>{{ plantDetails.care }}</p>
      </div>
      <div>
        <p>sun</p>
        <p>{{ plantDetails.sun }}</p>
      </div>
      <table>
        <tr>
          <td>Category</td>
          <td>{{ plantDetails.category }}</td>
        </tr>
        <tr>
          <td>Size</td>
          <td>{{ plantDetails.size }}</td>
        </tr>
        <tr>
          <td>Season</td>
          <td>{{ plantDetails.season }}</td>
        </tr>
        <tr>
          <td>Indoors</td>
          <td v-if="plantDetails.indoors === true">Yes</td>
          <td v-else>No</td>
        </tr>
      </table>
      <span>-------------------------------------------------------</span>
      <table>
        <tr>
          <td>Bloom time</td>
          <td>{{ plantDetails.bloom_time }}</td>
        </tr>
        <tr>
          <td>Plant depth</td>
          <td>{{ plantDetails.depth }}</td>
        </tr>
        <tr>
          <td>Spacing</td>
          <td>{{ plantDetails.spacing }}</td>
        </tr>
      </table>
      <span>-------------------------------------------------------</span>
    </div>
  </div>
  <div v-else>
    <p>fetching plant...</p>
  </div>
</template>

<script lang="ts">
import { usePlantStore } from "@/stores/store";
import type { plantType } from "@/types";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "PlantDetails",
  props: ["id"],
  setup(props) {
    const plantStore = usePlantStore();
    const plantDetails = ref<plantType | undefined>(undefined);

    onMounted(async () => {
      plantDetails.value = await plantStore.getPlantDetails(props.id);
    });
    return {
      plantDetails,
    };
  },
});
</script>
