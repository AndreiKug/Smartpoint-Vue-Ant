<script setup>
defineProps({
    city: Object,
});

</script>

<template>
    <tr>
      <td>{{ city.id }} </td>
      <td>{{ city.city }}</td>
      <td>{{ city.carsCount }}</td>
      <td>{{ city.population }}</td>
    </tr>
</template>

<style scoped>
td {
  padding-left: 20px;
  padding-top: 20px;
}
</style>