<template>
  <header class="text-start text-secondary shadow-sm px-3 py-2 mb-4  "><h3>Clientes</h3> </header>
  <div class="col-10 shadow main"> 
    <div class="row justify-content-between pt-3 px-3">
      <h5 class="card-title col-5 pb-0 text-start">Criação de Cliente</h5>
    </div>
    <hr class="mx-3">  
      <div class="card-body p-3 pt-0">
          <div class="text-start col-6 mb-4" >
              <label class="fw-bold">Nome</label>
              <input type="name" class="form-control" required v-model="this.client.name"/>
          </div>
          <div class="text-start col-3 mb-4" >
              <label class="fw-bold">Cpf</label>
              <input type="text" class="form-control" required v-model="this.client.cpf"/>
          </div>
          <div class="text-start col-6 mb-4" >
              <label class="fw-bold">Email</label>
              <input type="email" class="form-control" required v-model="this.client.email"/>
          </div>
          <div class="text-start col-3 mb-4" >
              <label class="fw-bold">Telefone</label>
              <input type="tel" class="form-control" required placeholder="(xx) xxxxx-xxxx" v-model="this.client.phone"/>
          </div>
          <div class="col-3 d-flex justify-content-around">
                <button class="btn btn-primary btn-sm rounded px-3" @click="submit" type="submit">Salvar</button>
                <button class="btn text-primary btn-outline border border-primary btn-sm rounded px-3" @click="cancelSubmit" type="submit">Cancelar</button>
          </div>
      </div>
  </div>
</template>

<script>

import axios from "axios";


export default {
  data(){
      return {
        client: {},
        categories: {},
      }
  },
  created(){
      axios
          .get(`http://127.0.0.1:3000/categories`)
          .then(response => {
          this.categories = response.data;
      })
  },
  methods: {
      async submit(){
          await axios
                  .post(`http://127.0.0.1:3000/clients`, this.client)
                  .then(   
                    
                  )
                  .catch(error => {
                      alert("Preencha os campos obrigatorios")
                  })
                  this.$router.push("/clients")

      },
      cancelSubmit(){
          this.$router.push("/clients")
      }
  }
}
</script>