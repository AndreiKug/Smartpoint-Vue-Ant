import { defineStore } from "pinia";
import axios from "axios";

export const useRootStore = defineStore("root", {
    state: () => ({
        cities: [],
        open: false,
    }),
    actions: {
        async getCities() {
            const data = await axios.get(
                "https://5111997b52f941d8.mokky.dev/cities"
            );
            this.cities = data?.data;
        },
    },
});
