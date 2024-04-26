<script setup>
defineProps({
    cities: Object,
})

const columns = [
        {
            title: 'Индекс',
            dataIndex: 'id',
            key: 'id'
          },
          {
            title: 'Город',
            dataIndex: 'city',
            key: 'city'
          },
          {
            title: 'Количество автомобилей',
            dataIndex: 'carsCount',
            key: 'carsCount'
          },
          {
            title: 'Количество жителей',
            dataIndex: 'population',
            key: 'population'
          },]

</script>


<template>
    <a-table :dataSource="cities" :columns="columns" class="table"/>
</template>
  
<style scoped>
    .table {
        width: 50%;
        margin: 0 auto;
    }

  th.column-money,
  td.column-money {
    text-align: right !important;
  }
</style>
  
