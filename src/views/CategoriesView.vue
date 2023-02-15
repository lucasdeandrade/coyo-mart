<template>
  <div class="modal fade" id="confirmModal" >
    <div class="modal-dialog">
      <div class="modal-content p-4 dialog ">
        <button type="button" class="col-1 align-self-end btn-close" data-bs-dismiss="modal"></button>
        <div class="modal-body pt-2">
          <div class="row justify-content-between pt-3 px-3">
            <h5 class="card-title col pb-0 text-start">Editando Categoria</h5>
            <button type="button" class="col-2 mx-3 btn btn-outline-danger btn-sm rounded" @click="deleteCategory">Deletar</button>
          </div>
          <hr class="mx-3">  
          <form >
            <div class="card-body p-3 pt-0">
                <div class="text-start col-6 mb-4" >
                  <label class="fw-bold">Nome</label>
                  <input type="name" class="form-control" required v-model="this.category.description"/>
                </div>
              <div class="col-6 d-flex justify-content-around">
                <button class="btn btn-primary btn-sm rounded px-3" @click="submit" type="submit">Salvar</button>
                <button class="btn text-primary btn-outline border border-primary btn-sm rounded px-3" data-bs-dismiss="modal">Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>  

  <header class="text-start text-white shadow-sm px-2 py-2 mb-4 bg-dark-subtle"><h3>Categorias</h3> </header>
  <div class="col-11 shadow"> 
    <div class="row justify-content-between pt-3 px-3">
      <h5 class="card-title col-5 align-self-center pb-0 text-start">Listagem de Categorias</h5>
      <div class="col-4 align-self-end input">
        <div class="row mt-2">
          <button class="col-3 btn btn-outline-primary coyoButton" @click="this.category = {}" data-bs-toggle="modal" data-bs-target="#confirmModal">Novo</button>
          <input type="text" class="col mx-2 form-control" placeholder="Procurar" aria-label="Search" v-model="searchCategory" >
        </div>
      </div>
    </div>
    <hr class="mx-2">  
    <div class="p-2 main">
      <table class="table table-hover">
        <thead>
          <tr class="bg-dark-subtle">
            <th>ID</th>
            <th>Descrição</th>
            <th>Data Criação</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="(category, index) in filteredCategories" :key="index" @click="selectCategory(category)" title="Clique para editar" data-bs-toggle="modal" data-bs-target="#confirmModal">
            <td class="col-3"><p>{{ category.id }}</p></td>
            <td><p>{{ category.description }}</p></td>
            <td><p>{{ 
              `${new Date(category.created_at).getDate()}/${new Date(category.created_at).getMonth() + 1 }/${new Date(category.created_at).getFullYear()}`
            }}</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

  import axios from 'axios'
  
  export default ({
      name: 'CategoriesView',
      data(){
        return {
          searchCategory: '',
          category: {}
        }
      },
      computed: {
        filteredCategories(){
          return this.$store.state.categories.filter(category => {
            return category.description.toLowerCase().includes(this.searchCategory.toLowerCase())
          })
        },
      },
      methods:{
        selectCategory(category){
          this.category = category
        },
        async submit(){
          if(this.category.id){
            await axios
                  .put(`http://127.0.0.1:3000/categories/${this.category.id}`, this.category)
                  .then()
          location.reload()

          }else{
            await axios
                  .post(`http://127.0.0.1:3000/categories`, this.category)
                  .then()
            location.reload()
          }
          
        },
        async deleteCategory(){
          var productsWithThisCategory =this.$store.state.products.filter(product=>{
            return this.category.id == product.category_id
          }).length

          if(productsWithThisCategory == 0){
            await axios
              .delete(`http://127.0.0.1:3000/categories/${this.category.id}`)
              .then(
              )
              location.reload()
          }
          else{
            alert(`Não é possivel deletar essa categoria, existe ${productsWithThisCategory} produto(s) vinculados a ela`)
          }
        }
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