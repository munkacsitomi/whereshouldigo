<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Castoro:ital@1&family=Roboto:wght@300;400;500&display=swap');
@import '@/assets/styles/variables';

body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $light-gray;
  color: $font-color;
}

h1,
h2 {
  font-weight: 300;
}
</style>
