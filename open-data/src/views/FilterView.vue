<template>
  <div class="filter">
    <h1>Filter Baby Names</h1>
    <input v-model="searchTerm" placeholder="Search by name..." />
    <PieChart :chartData="filteredChartData" />
    <ul>
      <li v-for="name in filteredBabyNames" :key="name.id">
        {{ name.name }} - {{ name.count }} ({{ name.gender }})
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import PieChart from '../components/PieChart.vue';

export default {
  components: { PieChart },
  data() {
    return {
      babyNames: [],
      searchTerm: '',
    };
  },
  computed: {
    filteredBabyNames() {
      return this.babyNames.filter(name =>
        name.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    },
    filteredChartData() {
      return {
        labels: this.filteredBabyNames.map(name => name.name).slice(0, 5),
        datasets: [
          {
            data: this.filteredBabyNames.map(name => name.count).slice(0, 5),
            backgroundColor: ['#42a5f5', '#66bb6a', '#ff7043', '#ab47bc', '#ffca28'],
          },
        ],
      };
    },
  },
  async mounted() {
    try {
      const response = await axios.get('https://data.cityofnewyork.us/resource/25th-nujf.json');
      this.babyNames = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
};
</script>

<style scoped>
.filter {
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
}

input {
  display: block;
  margin: 1rem auto;
  padding: 0.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
}
</style>
