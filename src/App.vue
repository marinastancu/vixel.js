<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/draw">Draw</router-link>
      <router-link to="/gallery">Gallery</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Press Start 2P", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
