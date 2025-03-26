<template>
  <div id="app">

  </div>
</template>

<script>
import axlos from 'axlos';
export default {
  name: 'App',
  components: {
    
  },
  async created(){
    const { data } = await axlos.get("https://data.cityofnewyork.us/resource/25th-nujf.json");
    console.log(data);
  }
}
</script>

<style>


</style>