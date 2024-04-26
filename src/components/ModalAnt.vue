<script setup>
import { ref } from "vue";
import {useRootStore} from "../stores/root";
import { storeToRefs } from "pinia";

/* ROOT START*/
const rootStore = useRootStore();
const {cities, open} = storeToRefs(rootStore);
/* ROOT END */

const emit = defineEmits(['close-modal']);

const cityName = ref('');
const carCount = ref('');
const population = ref('');

const addCity = () => {
  const cityData = {
    id: cities.value[cities.value.length - 1].id + 1,
    city: cityName.value,
    carsCount: parseInt(carCount.value),
    population: parseInt(population.value)
  };
    
  cities.value.push(cityData);

  closeModal();
};

const closeModal = () => {
  cityName.value = '';
  carCount.value = '';
  population.value = '';
  open.value = false;
};


</script>

<template>
    <a-modal v-model:open="open" title="Добавить город" :footer="null">               
        <a-space direction="vertical">
            <a-input v-model:value="cityName" placeholder="Город" style="width: 400px"/>
            <a-input v-model:value="carCount" placeholder="Кол-во автомобилей" />
            <a-input v-model:value="population" placeholder="Кол-во жителей" />
            <a-button type="primary" @click="addCity">Заполнить</a-button>
        </a-space>
    </a-modal>
</template>