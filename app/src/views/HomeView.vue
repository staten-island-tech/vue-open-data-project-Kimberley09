<template>
  <div>
    <h1>Baby Names</h1>
    <PieChart/>
  </div>
</template>

<script setup>
import PieChart from '@/components/PieChart.vue';
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}

.chart-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>