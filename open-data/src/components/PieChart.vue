<script>
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, CategoryScale);

export default {
  props: ['chartData'],
  components: { Pie },
  data() {
    return {
      options: { responsive: true }
    };
  }
};
</script>

<template>
  <Pie :data="chartData" :options="options" />
</template>
