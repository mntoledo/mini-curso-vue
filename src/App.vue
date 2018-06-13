<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">VueJS</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link :to="{ name: 'Hello' }" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Quemsomos' }" class="nav-link">Quem somos</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Estados' }" class="nav-link">Estados</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
    <footer>
      <h3>Marcelo Toledo 2018 made with VueJS  </h3>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin: 0 auto;
  background: #fff;
}

#app footer {
  padding: 20px;
}
</style>
