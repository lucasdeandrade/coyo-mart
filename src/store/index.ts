import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    products: [],
    clients: [],
  },
  getters: {
  },
  mutations: {
    getProducts(state, products){
      state.products = products;
    },
    getClients(state, clients){
      state.clients = clients;
    },
  },
  actions: {
    getProducts({commit}){
        axios
          .get('http://127.0.0.1:3000/products')
          .then(response => {
            commit('getProducts', response.data);
          })
    },
    getClients({commit}){
      axios
        .get('http://127.0.0.1:3000/clients')
        .then(response => {
          commit('getClients', response.data);
        })
    }
  },
  modules: {
  }
})
