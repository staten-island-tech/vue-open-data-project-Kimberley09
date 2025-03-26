<template>
  <Pie :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend);

defineProps(['chartData']);

const chartOptions = {
  responsive: true,
};
</script>
