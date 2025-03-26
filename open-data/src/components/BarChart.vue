<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  props: ['chartData'],
  components: { Bar },
  data() {
    return {
      options: { responsive: true, maintainAspectRatio: false }
    };
  }
};
</script>

<template>
  <Bar :data="chartData" :options="options" />
</template>
