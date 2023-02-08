<template>
  <header class="text-start text-white shadow-sm px-2 py-2 mb-4 bg-dark-subtle"><h3>Categoryes</h3> </header>
  <div class="col-11 shadow main"> 
    <div class="row justify-content-between pt-3 px-3">
      <h5 class="card-title col-5 align-self-center pb-0 text-start">Listagem de Categorias</h5>
      <div class="col-4 align-self-end input">
        <div class="row mt-2">
          <button class="col-3 btn btn-outline-primary coyoButton" @click="this.$router.push(`/categories/create`)">Novo</button>
          <input type="text" class="col mx-2 form-control" placeholder="Procurar" aria-label="Search" v-model="searchCategory" >
        </div>
      </div>
    </div>
    <hr class="mx-2">  
    <div class="p-2">
      <table class="table table-hover">
        <thead>
          <tr class="bg-dark-subtle">
            <th>ID</th>
            <th>Descrição</th>
            <th>Data Criação</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="(category, index) in filteredCategories" :key="index" @click="this.$router.push(`/categories/${category.id}`)">
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

  export default ({
      name: 'CategoriesView',
      data(){
        return {
          searchCategory: '',
        }
      },
      computed: {
        filteredCategories(){
          return this.$store.state.categories.filter(category => {
            return category.description.toLowerCase().includes(this.searchCategory.toLowerCase())
          })
        },
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