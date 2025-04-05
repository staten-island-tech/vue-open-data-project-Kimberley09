<template>
  <div class="chart-container">
    <h2>Baby Ethnicity Distribution</h2>
    <canvas ref="ethnicityCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js/auto';

const ethnicityCanvas = ref(null);

onMounted(async () => {
  try {
    const response = await fetch("https://data.cityofnewyork.us/resource/25th-nujf.json");
    const data = await response.json();

   
    const ethnicityCounts = data.reduce((counts, baby) => {
      const ethnicity = baby.ethcty || "Unknown";
      counts[ethnicity] = (counts[ethnicity] || 0) + 1;
      return counts;
    }, {});

    const labels = Object.keys(ethnicityCounts); 
    const values = Object.values(ethnicityCounts); 

 
    new Chart(ethnicityCanvas.value, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.label}: ${context.raw}`
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<style scoped>
.chart-container {
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 35px;
}

h2 {
  text-align: center;
  font-size: 1.2em;
}

.chart-container canvas {
  width: 100% !important;
  height: 550px !important;
}
</style>
