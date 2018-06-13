<template>
  <div class="hello">
    <h1>Meus testes</h1>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox"> {{checked}} </label>



  </div>
</template>

<script>
export default {
  name: 'testes',
  data () {


  }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
