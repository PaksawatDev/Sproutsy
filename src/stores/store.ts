import { db } from "@/main";
import { collection, getDocs } from "firebase/firestore";
import { defineStore } from "pinia";
import type { plantType } from "@/types";

export const usePlantStore = defineStore("plantStore", {
  state: () => ({
    plants: [] as plantType[],
  }),
  getters: {
    getPlantDetails: (state) => (plantId: string) => {
      const plant = state.plants.find((p) => p.id === plantId);

      return plant;
    },
  },
  actions: {
    async fetchPlants() {
      const collectionRef = collection(db, "plants");
      const snapshot = await getDocs(collectionRef);
      const plantCollection = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as plantType[];
      this.plants = plantCollection;
    },
  },
});
