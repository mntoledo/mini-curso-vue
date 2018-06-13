<template>
  <div class="hello">
    <form>
      <label>Digite seu cep</label>
      <input type="text" v-model="cep">
      <button@click.prevent="buscacep()">OK</button>
    </form>
    <ul>
      <li>{{dados.logradouro}} </li>
      <li>{{dados.bairro}} </li>
      <li>{{dados.localidade}} </li>
      <li>{{dados.uf}} </li>


    </ul>
    <h1>Estados</h1>
    <table>
      <thead>
        <tr>
          <th>Estado</th>
          <th>País</th>

        </tr>

      </thead>
      <tbody>
        <tr v-for="est in estados.geonames">
          <td>{{est.name}}</td>
          <td>{{est.countryName}}</td>

        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
  export default {
    name: 'estados',
    data() {
      return {
        estados: [],
        cep: '',
        dados: {}
      }
    },
    mounted() {
      // GET /someUrl
      this.$http.get('http://www.geonames.org/childrenJSON?geonameId=3469034').then(response => {

        this.estados = response.body;

      }, response => {
        // error callback
      });
    },
    methods: {
      buscacep() {
        this.$http.get('https://viacep.com.br/ws/' + this.cep + '/json/unicode/').then(response => {

          this.dados = response.body;

        }, response => {
          // error callback
        });
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
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

  table {
    margin: 0 auto;
  }

</style>
