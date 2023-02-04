<template>
  <div class="row flex-nowrap">
    <div class="col-2 sidebar border">
      <img class="coyo_logo" src="./assets/coyo_logo.png" alt="">
      <div class="nav-item">
        <router-link to="/products">Produtos</router-link>
      </div>
      <div class="nav-item">
        <router-link  to="/clients">Clients</router-link>
      </div>
    </div>
    <div class="col main">
      <router-view/>
    </div>
  </div>
</template>

<script>

  export default {

    created() {
      this.$store.dispatch('getProducts')
      this.$store.dispatch('getClients')
    }

  }
</script>

<style lang="scss">
#app {
  overflow: hidden;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.sidebar {
  background-color: rgb(43, 42, 115);
  height: 100vh;
}

.nav-item {
  background-color: rgb(33, 33, 91);

  a {
    font-weight: bold;
    text-decoration: none;
    color: lightgray;
  }
}
.coyo_logo {
  width: 200px;
}

</style>
