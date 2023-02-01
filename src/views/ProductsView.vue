<template>
  <div class="m-4">
    <header class="text-start text-secondary shadow-sm px-3 py-2 mb-4  "><h2>Produtos</h2> </header>
    <div class="shadow"> 
      <div class="row justify-content-between">
        <h4 class="card-title col-5 p-4 pb-0 text-start">Listagem de Produtos</h4>
        <div class="col-4 align-self-end input mx-3">
          <input type="text" class="form-control" placeholder="Procurar" aria-label="Search" >
        </div>
      </div>
      <hr class="mx-3">  
        <div class="card-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Imagem</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>UN</th>
                <th>Preço</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="index">
                <td><p>Implementar</p></td> 
                <td class="col-3"><p>{{ product.description }}</p></td>
                <td ><p>{{ product.unit_type }}</p></td>
                <td class="col-3"><p>{{ product.name }}</p></td>
                <td><p>{{ product.stock }}</p></td>
                <td><p>{{ product.price.toFixed(2) }}</p></td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  </div>
</template>

<script>
    export default ({
        name: 'ProductsView',
        computed: {
            products(){
                return this.$store.state.products;
            }
        },
    })
</script>

<style lang="scss">
  table:nth-last-child(1){
    text-align: -webkit-center;
  }
  td p{
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 30ch;
      white-space: nowrap;
    }
</style>