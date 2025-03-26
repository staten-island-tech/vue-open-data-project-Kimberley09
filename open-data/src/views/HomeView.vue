<template>
  <div class="home">
    <h1>Popular Baby Names</h1>
    <BarChart :chartData="chartData" />
    <PieChart :chartData="chartData" />
    <ul>
      <li v-for="name in babyNames" :key="name.id">
        {{ name.name }} - {{ name.count }} ({{ name.gender }})
      </li>
    </ul>
  </div>
</template>

<script setup>
import BarChart from '../components/BarChart.vue';
import PieChart from '../components/PieChart.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const babyNames = ref([]);
const chartData = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(
      'https://data.cityofnewyork.us/resource/25th-nujf.json'
    );
    babyNames.value = response.data;
    chartData.value = {
      labels: babyNames.value.slice(0, 5).map((name) => name.name),
      datasets: [
        {
          label: 'Popularity',
          data: babyNames.value.slice(0, 5).map((name) => name.count),
          backgroundColor: ['#42a5f5', '#66bb6a', '#ff7043', '#ab47bc', '#ffca28'],
        },
      ],
    };
  } catch (error) {
    console.error('Error fetching baby names:', error);
  }
});
</script>

<style scoped>
.home {
  text-align: center;
  margin: 2rem auto;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
  font-size: 1rem;
}
</style>
