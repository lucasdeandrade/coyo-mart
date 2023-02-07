<template>
  <header class="text-start text-white shadow-sm px-2 py-2 mb-4 bg-dark-subtle"><h3>Produtos</h3></header>
  <div class="col-11 shadow main"> 
    <div class="row justify-content-between pt-3 px-3">
      <h5 class="card-title col-5 align-self-center pb-0 text-start">Listagem de Produtos</h5>
      <div class="col-5 align-self-end input mx-2">
        <div class="row">
          <button class="col-3 btn btn-outline-primary m-0 mx-2" @click="this.$router.push(`/products/create`)">Novo</button>
          <input type="text" class="col form-control" placeholder="Procurar" aria-label="Search" v-model="searchProduct" >
          <select class="form-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" v-model="this.order">
              <option value="Asc" selected>Maior</option>
              <option value="Desc">Menor</option>
          </select>
        </div>
        
      </div>
    </div>
    <hr class="mx-2">  
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
          products: {},
          
        }
      },
      computed: {    
          filteredProducts(){

             var a = this.$store.state.products.filter(product => {
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