<template>
    <Pie :data="chartData" :options="chartOptions" />
  </template>
  
  <script setup>
 import { ref, onMounted } from 'vue';
  import { Chart } from 'chart.js/auto';
  
  const chartCanvas = ref(null);
  
  onMounted(async () => {
    const response = await fetch("https://data.cityofnewyork.us/resource/25th-nujf.json");
    const data = await response.json();
    const labels = data.map(baby => baby.ethcty);
    const amountBaby = data.map(baby => Number(baby.ethcty));

    new Chart(chartCanvas.value, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          { label: baby.ethcty, data: baby.ethcty, backgroundColor: 'blue' },

        ]
      }
    });
  });
  </script>
  