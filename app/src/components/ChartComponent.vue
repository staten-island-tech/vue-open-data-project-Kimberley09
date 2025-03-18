<script setup>
const url = "https://data.cityofnewyork.us/resource/25th-nujf.json"

async function getData(url) { 
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error)
}
</script>