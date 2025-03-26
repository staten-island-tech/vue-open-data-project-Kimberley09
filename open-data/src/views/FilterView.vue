<script>
import axios from 'axios';

export default {
  data() {
    return { babyNames: [], searchTerm: '' };
  },
  async mounted() {
    try {
      const response = await axios.get('https://data.cityofnewyork.us/resource/25th-nujf.json');
      this.babyNames = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  computed: {
    filteredNames() {
      return this.babyNames.filter(name =>
        name.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
};
</script>

<template>
  <div>
    <h1>Filter Baby Names</h1>
    <input v-model="searchTerm" placeholder="Search baby names..." />
    <ul>
      <li v-for="name in filteredNames" :key="name.id">
        {{ name.name }} - {{ name.count }} ({{ name.gender }})
      </li>
    </ul>
  </div>
</template>

<style scoped>
input {
  display: block;
  margin: 1rem auto;
  padding: 0.5rem;
}
</style>
