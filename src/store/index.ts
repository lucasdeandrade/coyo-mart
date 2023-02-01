import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    products: []
  },
  getters: {
  },
  mutations: {
    loadProducts(state, products){
      state.products = products;
    }
  },
  actions: {
    loadProducts({commit}){
        axios
          .get('http://127.0.0.1:3000/products')
          .then(response => {
            commit('loadProducts', response.data);
          })
    }
  },
  modules: {
  }
})
