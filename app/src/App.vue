<template>
  <div id="app">
    <PieChartComponent />
  </div>
</template>

<script>
import PieChartComponent from './components/BarChart.vue';

export default {
  name: 'App',
  components: {
    PieChartComponent,
  },
};
</script>

<style>

#app {
  text-align: center;
}
</style>
