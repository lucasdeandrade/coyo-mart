<template>
  <div class="modal fade" id="confirmModal" >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content p-4 dialog ">
        <button type="button" class="col-1 align-self-end btn-close" data-bs-dismiss="modal"></button>
        <div class="modal-body pt-2">
            <h1 class="col-auto modal-body fs-5" >Tem certeza que quer excluir?</h1>
          <div class="row justify-content-center">
            <button type="button" class="col-3 m-3 mr-3 btn btn-primary" @click="deleteClient">Sim</button>
            <button type="button" class="col-3 m-3 mr-3 btn btn-secondary" data-bs-dismiss="modal">Não</button>
          </div>
        </div>
      </div>
    </div>
  </div>  

  <header class="text-start text-secondary shadow-sm px-3 py-2 mb-4  "><h3>Clientes</h3> </header>
  <div class="col-10 shadow main"> 
    <div class="row justify-content-between pt-3 px-3">
      <h5 class="card-title col-5 pb-0 text-start">Detalhes do Cliente</h5>
      <div class="col-3 d-flex justify-content-around">
        <button class="col-5 btn btn-outline-primary btn-sm rounded" @click="goToEdit(client.id)">Editar</button>
        <button type="button" class="col-5 btn btn-outline-danger btn-sm rounded" data-bs-toggle="modal" data-bs-target="#confirmModal" >
          Deletar
        </button>
      </div>
    </div>
    <hr class="mx-3">  
      <div class="card-body p-3 pt-0">
          <div class="text-start col-6 mb-4" >
              <label class="fw-bold">Nome</label>
              <div class="text-light-emphasis bg-dark-subtle form-control" >{{ this.client.name }}</div>
          </div>
          <div class="text-start col-3 mb-4" >
              <label class="fw-bold">Cpf</label>
              <div class="text-light-emphasis bg-dark-subtle form-control" >{{ this.client.cpf }}</div>
          </div>
          <div class="text-start col-6 mb-4" >
              <label class="fw-bold">Email</label>
              <div class="text-light-emphasis bg-dark-subtle form-control" >{{ this.client.email }}</div>
          </div>
          <div class="text-start col-3 mb-4" >
              <label class="fw-bold">Telefone</label>
              <div class="text-light-emphasis bg-dark-subtle form-control" >{{ this.client.phone }}</div>
          </div>
      </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data(){
      return {
        client: {},
      }
  },
  async created(){
    axios
    .get(`http://127.0.0.1:3000/clients/${this.$route.params.id}`)
    .then(response => {
      this.client = response.data;
    })
  },
  methods:{
    goToEdit(id){ 
      this.$router.push("/clients/"+ id + "/edit")
    },
    async deleteClient(){
      try {
        await axios
        .delete(`http://127.0.0.1:3000/clients/${this.$route.params.id}`)
        .then(
          this.$router.push('/clients')
        )
        location.reload()

      }catch(error){
        console.log(error)
      }
    }
  }
}
</script>