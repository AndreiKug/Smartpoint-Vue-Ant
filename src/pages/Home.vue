<script setup>
import { ref } from 'vue';
import {useRootStore} from "../stores/root";
import { storeToRefs } from "pinia";

import TableAnt from '../components/TableAnt.vue'
import ModalAnt from '../components/ModalAnt.vue'

/* ROOT START*/
const rootStore = useRootStore();
rootStore.getCities();
const {cities, open} = storeToRefs(rootStore);
/* ROOT END */

const showModal = () => {
  open.value = true;
};

</script>>

<template>
    <main>
        <header class="header">
            <h1 class="heading">Главная страница</h1>
            <div>
                <a-button type="primary" @click="showModal">Добавить</a-button>         
            </div>
        </header>
        <TableAnt :cities="cities" />
        <ModalAnt :cities="cities" @close-modal="closeModal"/>
    </main> 
</template>>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
h1 {
    color:#fff;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 100px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 50px;
    padding: 20px;
    /* background-color: transparent; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid #ccc;
    border-radius: 5px;
    /* background: #141414; */
    background-color: rgba(14, 14, 14, 0.1);
}

.heading {
    color: #1E88E5;
    text-align: center;
    margin: 20px;
    font-size: 30px;
    font-weight: 700;
    /* text-transform: uppercase; */
    letter-spacing: 2px;
    font-family: sans-serif;
}

.modal-button {
    width: 100px;
    height: 30px;
    margin: 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.modal-button:hover {
  background-color: #45a049; 
}
</style>