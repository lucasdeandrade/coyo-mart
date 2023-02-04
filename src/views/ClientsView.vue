<!-- <template>
    <div>
      <table>
        <tr v-for="(client, index) in clients" :key="index">
          <td>{{ client.name }}</td>
          <td>{{ client.email }}</td>
          <td>{{ client.cpf }}</td>
          <td>{{ client.phone }}</td>
          <td>
            <button @click="editClient(client.id)">Edit</button>
            <button @click="deleteClient(client.id)">Delete</button>
          </td>
        </tr>
      </table>
      <button @click="addClient()">Add</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        clients: []
      }
    },
    mounted() {
      this.fetchClints();
    },
    methods: {
      async fetchClints() {
        const response = await axios.get('http://127.0.0.1:3000/clients');
        this.clients = response.data;
      },
      async addClient() {
        const response = await axios.post('http://127.0.0.1:3000/clients', {
          name: 'New Client',
          cpf: 'Cpf',
          email: 'This is a new client',
          phone: 'Telefone'
        });
        this.clients.push(response.data);
      },
      async editClient(id) {
        const client = this.clients.find(client => client.id === id);
        client.name = 'Edited client';
        client.cpf = 'This is an edited client';
        client.phone = 'This is a edited phone'
        client.email = 'This is a edited email'
        await axios.put(`http://127.0.0.1:3000/clients${id}`, client);
      },
      async deleteClient(id) {
        await axios.delete(`http://127.0.0.1:3000/clients${id}`);
        this.clients = this.clients.filter(client => client.id !== id);
      }
    }
  }
  </script> -->


<template>
      <header class="text-start text-secondary shadow-sm px-2 py-2 mb-4  "><h3>Clientes</h3> </header>
      <div class="shadow"> 
        <div class="row justify-content-between">
          <h5 class="card-title col-5 p-4 pb-0 text-start">Listagem de Clientes</h5>
          <div class="col-4 align-self-end input mx-3">
            <input type="text" class="form-control" placeholder="Procurar" aria-label="Search" >
          </div>
        </div>
        <hr class="mx-3">  
          <div class="card-body">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Telefone</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(client, index) in clients" :key="index">
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
          computed: {
              clients(){
                  return this.$store.state.clients;
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