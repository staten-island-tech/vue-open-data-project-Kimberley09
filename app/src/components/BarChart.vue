<template>
  <div class="chart-container">
    <h2>Top Baby Names by Gender</h2>
    <canvas ref="combinedCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const combinedCanvas = ref(null);

onMounted(async () => {
  try {
    // For debugging purposes, using hardcoded data to test the chart
    const labels = ['Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia', 'Mia', 'Amelia', 'Harper', 'Evelyn', 'Abigail'];
    const maleCounts = [300, 250, 230, 180, 170, 150, 140, 130, 120, 110];
    const femaleCounts = [200, 180, 160, 150, 140, 130, 120, 110, 100, 90];

    // Log data for testing
    console.log('Labels (names):', labels);
    console.log('Male counts:', maleCounts);
    console.log('Female counts:', femaleCounts);

    // Check if the canvas element is available
    if (!combinedCanvas.value) {
      console.error('Canvas element not found');
      return;
    }

    // Create the combined chart with hardcoded data
    new Chart(combinedCanvas.value, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Male',
            data: maleCounts,
            backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Female',
            data: femaleCounts,
            backgroundColor: 'rgba(255, 99, 132, 0.6)', // Pink
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: {
            display: true,
            text: 'Top 10 Baby Names in 2025',
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Baby Names',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Count',
            },
          },
        },
      },
    });
  } catch (error) {
    console.error('Error fetching or processing data:', error);
  }
});
</script>

<style scoped>
.chart-container {
  width: 95%;
  margin: 0 auto;
  text-align: center;
}

canvas {
  width: 100% !important;
  height: 500px !important;
  border: 1px solid black; /* Added border for visibility */
}
</style>
