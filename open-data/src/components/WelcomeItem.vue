<template>
  <div class="welcome-item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="content">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.welcome-item {
  display: flex;
  margin: 1.5rem 0;
}

i {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--color-white);
  border: 1px solid var(--color-indigo);
  margin-right: 1rem;
}

.content h3 {
  margin: 0;
  font-size: 1.2rem;
}
</style>
