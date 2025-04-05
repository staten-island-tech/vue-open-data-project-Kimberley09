<template>
  <div class="chart-container">
    <h2>Baby Count by Year</h2>
    <canvas ref="yearCanvas"></canvas>
    <button @click="goToPieChart" class="link-button">View Pie Chart</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js/auto';
import { useRouter } from 'vue-router';

const yearCanvas = ref(null);
const router = useRouter();

onMounted(async () => {
  try {
    const response = await fetch("https://data.cityofnewyork.us/resource/25th-nujf.json");
    const data = await response.json();

    const yearCounts = data.reduce((counts, baby) => {
      const year = baby.year_of_birth || "Unknown";
      counts[year] = (counts[year] || 0) + 1;
      return counts;
    }, {});

    const labels = Object.keys(yearCounts);
    const values = Object.values(yearCounts);

    new Chart(yearCanvas.value, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Baby Count by Year',
          data: values,
          backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' }
        }
      }
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const goToPieChart = () => {
  router.push('/pie-chart');
};
</script>

<style scoped>
.chart-container {
  width: 95%;
  margin: 0 auto;
  text-align: center;
}

.link-button {
  margin-top: 20px;
  padding: 10px 15px;
  background-color: lightblue;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.link-button:hover {
  background-color: deepskyblue;
}
</style>
