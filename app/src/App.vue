<template>
  <div id="app">
    <header>
      <h1>Popular Baby Names in NYC</h1>
      <nav>
        <ul>
          <li><router-link to="/pie-chart">Pie Chart</router-link></li>
          <li><router-link to="/bar-chart">Bar Chart</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style>
@import './assets/main.css';


header {
  text-align: center;
  background-color: lightblue;
  padding: 15px;
  margin-bottom: 20px;
  color: white;
}

  nav ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 10px 0;
}

nav li {
  margin: 0 15px;
}

nav a {
    text-decoration: none;
    color: white;
    font-weight: bold;
}

nav a:hover {
    text-decoration: underline;
}
</style>