<template>
  <div class="home">
    <h1>Popular Baby Names</h1>
    <BarChart :chartData="chartData" />
    <ul>
      <li v-for="name in babyNames" :key="name.id">
        {{ name.name }} - {{ name.count }} ({{ name.gender }})
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import BarChart from '../components/BarChart.vue';

export default {
  components: { BarChart },
  data() {
    return {
      babyNames: [],
      chartData: null,
    };
  },
  async mounted() {
    try {
      const response = await axios.get('https://data.cityofnewyork.us/resource/25th-nujf.json');
      this.babyNames = response.data;
      this.chartData = {
        labels: this.babyNames.map(name => name.name).slice(0, 5),
        datasets: [
          {
            data: this.babyNames.map(name => name.count).slice(0, 5),
            backgroundColor: ['#42a5f5', '#66bb6a', '#ff7043', '#ab47bc', '#ffca28'],
          },
        ],
      };
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
};
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
}
</style>
