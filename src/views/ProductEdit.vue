<template>
    <header class="text-start text-secondary shadow-sm px-3 py-2 mb-4  "><h3>Produtos</h3> </header>
    <div class="col-10 shadow main"> 
      <div class="row justify-content-between  align-items-center pt-3 px-3">
        <h5 class="card-title col-5 text-start">Editando Produto</h5>
      </div>
      <hr class="mx-2">  
      <form id="validateForm">
        <div class="card-body p-3 pt-0">
            <div class="text-start col-6 mb-4" >
                <label  class=" fw-bold">Nome</label>
                <input type="text"  class="form-control" v-model="this.product.name" required />
            </div>
            <div class="text-start col-6 mb-4" name="description-product">
                <label class="fw-bold text">Descrição</label>
                <div class="form-floating">
                    <textarea class="form-control" v-model="product.description" id="floatingTextarea2" style="height: 100px"></textarea>
                </div>
            </div>
            <div class="text-start col-3 mb-4" name="description-product">
                <label class="fw-bold">Categorias</label>
                  <select class="form-select my-1 mr-sm-2" v-model="this.product.category_id" required >
                      <option
                          v-for="(category, index) in this.categories"
                          :key="index" :value="category.id">{{ category.description}}
                      </option>
                  </select>
            </div>
            <div class="text-start col-3 mb-4" >
                <label class="fw-bold">Unidade de Medida</label>
                <input type="text" class="form-control" v-model="this.product.unit_type" required/>
            </div>
            <div class="text-start col-3 mb-4" >
                <label class="fw-bold">Quantidade em estoque</label>
                <input class="form-control my-1 mr-sm-2" v-model="this.product.stock" required />
            </div>
            <div class="text-start col-3 mb-4" >
                <label class="fw-bold">Valor por {{ this.product.unit_type }}</label>
                <input class="form-control my-1 mr-sm-2" v-model="this.product.price" required/>
            </div>
            <div class="text-start col-3 mb-4" >
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="this.product.featured">
                    <label class="fw-bold form-check-label" for="flexCheckDefault">
                        Em destaque?
                    </label>
                </div>
            </div>
            <div class="col-3 d-flex justify-content-around">
                <button class="btn btn-primary btn-sm rounded px-3" @click="submit" type="submit">Salvar</button>
                <button class="btn text-primary btn-outline border border-primary btn-sm rounded px-3" @click="cancelSubmit" type="submit">Cancelar</button>
            </div>
        </div>
      </form>
    </div>
  </template>

<script>

import axios from "axios";


export default {
    data(){
        return {
          product: {},
          categories: {},
          category: {},
          idProduct: ''
        }
    },
    created(){
        axios
            .get(`http://127.0.0.1:3000/products/${this.$route.params.id}`)
            .then(response => {
            this.product = response.data;
            this.category = response.data.category
            this.idProduct = response.data.id
        }),
        axios
            .get(`http://127.0.0.1:3000/categories`)
            .then(response => {
            this.categories = response.data;
        })
    },
    methods: {
        async submit(){
                await axios
                        .put(`http://127.0.0.1:3000/products/${this.$route.params.id}`, this.product)
                        .then(),
                this.$router.push("/products/" + this.$route.params.id )
            },
        
    }
}
</script>