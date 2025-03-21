<template>
  <div>
    <pie-chart :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs';
import { reactive } from 'vue';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';


ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

export default {
  name: 'PieChartComponent',
  components: {
    PieChart: Pie,
  },
  setup() {
    const chartData = reactive({
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My Pie Chart',
          data: [300, 50, 100],
          backgroundColor: ['#FF5733', '#33AFFF', '#FFFB33'],
        },
      ],
    });

    const chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label;
              const value = context.raw;
              return `${label}: ${value} units`;
            },
          },
        },
      },
    };

    return {
      chartData,
      chartOptions,
    };
  },
};
</script>

<style scoped>

</style>
