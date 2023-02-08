<template>
      <header class="text-start text-white shadow-sm px-2 py-2 mb-4 bg-dark-subtle"><h3>Clientes</h3> </header>
      <div class="col-11 shadow main"> 
        <div class="row justify-content-between pt-3 px-3">
          <h5 class="card-title col-5 align-self-center pb-0 text-start">Listagem de Clientes</h5>
          <div class="col-4 align-self-end input">
            <div class="row mt-2">
              <button class="col-3 btn btn-outline-primary coyoButton" @click="this.$router.push(`/clients/create`)">Novo</button>
              <input type="text" class="col mx-2 form-control" placeholder="Procurar" aria-label="Search" v-model="searchClient" >
            </div>
          </div>
        </div>
        <hr class="mx-2">  
        <div class="p-2">
          <table class="table table-hover">
            <thead>
              <tr class="bg-dark-subtle">
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
              </tr>
            </thead>
            <tbody >
              <tr v-for="(client, index) in filteredClients" :key="index" @click="this.$router.push(`/clients/${client.id}`)">
                <td><p>{{ client.name }}</p></td>
                <td><p>{{ client.email }}</p></td>
                <td><p>{{ client.phone }}</p></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </template>
  
  <script>
      export default ({
          name: 'ClientsView',
          data(){
            return {
              searchClient: '',
            }
          },
          computed: {
            filteredClients(){
              return this.$store.state.clients.filter(client => {
                return client.name.toLowerCase().includes(this.searchClient.toLowerCase())
              })
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