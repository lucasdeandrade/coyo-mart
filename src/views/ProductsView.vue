<template>
  <header class="text-start text-white shadow-sm px-2 py-2 mb-4 bg-dark-subtle"><h3>Produtos</h3></header>
  <div class="col-11 shadow main"> 
    <div class="row justify-content-between">
      <h5 class="card-title col-5 p-4 pb-0 text-start">Listagem de Produtos</h5>
      <div class="col-4 align-self-end input mx-3">
        <input type="text" class="form-control" placeholder="Procurar" aria-label="Search" v-model="searchProduct" >
      </div>
    </div>
    <hr class="mx-3">  
      <div class="p-2">
        <table class="table table-hover">
          <thead>
            <tr class="bg-dark-subtle">
              <th>Imagem</th>
              <th>Nome do Produto</th>
              <th>Categoria</th>
              <th>UN</th>
              <th>Preço</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in filteredProducts" :key="index" @click="showProduct(product.id)">
              <td class="col"><p>Implementar</p></td> 
              <td class="col"><p>{{ product.name }}</p></td>
              <td class="col"><p>{{ product.category_id }}</p></td>
              <td class="col" ><p>{{ product.unit_type }}</p></td>
              <td class="col"><p>{{ product.price.toFixed(2) }}</p></td>
              <td class="col"><p>{{ product.stock }}</p></td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
  export default ({
      name: 'ProductsList',
      data (){
        return {
          searchProduct: '',
          products: {}
        }
      },
      computed: {    
          filteredProducts(){
            return this.$store.state.products.filter(product => {
              return product.name.toLowerCase().includes(this.searchProduct.toLowerCase())
            })
          }
      },
      methods: {
        showProduct(id){
          this.$router.push(`/products/${id}`)
        },
        
      }
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