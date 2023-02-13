<template>
  <div class="row flex-nowrap">
    <div class="col-2 sidebar p-0 ">
      <img class="coyo_logo" src="./assets/coyo_logo.png" alt="">
      <div @click="this.$router.push('/categories')" class="nav-item p-1 mb-1">Categorias</div>
      <div @click="this.$router.push('/products')" class="nav-item p-1 mb-1">Produtos</div>
      <div @click="this.$router.push('/clients')" class="nav-item p-1">Clientes</div>
    </div>
    <div class="col">  
      <router-view />
    </div>
  </div>
</template>

<script >

  export default {

    created() {
      this.$store.dispatch('getProducts')
      this.$store.dispatch('getClients')
      this.$store.dispatch('getCategories')
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
.coyoButton{
    width: 80px;
  }

.nav-item {
  cursor: pointer;
  background-color: rgb(33, 33, 91);
  font-weight: bold;
  text-decoration: none;
  color: lightgray;
}
.coyo_logo {
  width: 200px;
}
.main{  
  max-height: 82vh;
  overflow-y:scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar-track {
  background: transparent;        /* color of the tracking area */
  }
  &::-webkit-scrollbar {
    width: 10px;               /* width of the entire scrollbar */
         /* color of the tracking area */
  }
  &::-webkit-scrollbar-thumb {
    background-color: lightgray;    /* color of the scroll thumb */
    border-radius: 20px;  
  }
}

</style>
