<template>
    <header class="text-start text-secondary shadow-sm px-3 py-2 mb-4  "><h3>Produtos</h3> </header>
    <div class="shadow"> 
      <div class="row justify-content-between">
        <h5 class="card-title col-5 p-4 pb-0 text-start">Detalhes do Produto</h5>
      </div>
      <hr class="mx-3">  
        <div class="card-body p-3 pt-0">
            <div class="text-start col-6 mb-4" name="description-product">
                <label class="fw-bold text">Descrição</label>
                <div class="form-floating">
                    <textarea class="form-control" v-model="product.description" id="floatingTextarea2" style="height: 100px"></textarea>
                </div>
            </div>
            <div class="text-start col-3 mb-4" name="description-product">
                <label class="fw-bold">Categorias</label>
                <form class="form-inline">
                    <select class="text-light-emphasis bg-dark-subtle form-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option :value="this.category.description " selected>{{ this.category.description}}</option>
                        <option
                            v-for="(category, index) in this.categories"
                            v-show="this.category.id != category.id" 
                            :key="index" :value="category.id">{{ category.description}}
                        </option>
                    </select>
                </form>
            </div>
            <div class="text-start col-3 mb-4" >
                <label class="fw-bold">Unidade de Medida</label>
                <div class="text-light-emphasis bg-dark-subtle form-control" >{{ this.product.unit_type }}</div>
            </div>
            <div class="text-start col-3 mb-4" >
                <label class="fw-bold">Quantidade em estoque</label>
                <div class="text-light-emphasis bg-dark-subtle form-control my-1 mr-sm-2" >{{ this.product.stock}}</div>
            </div>
            <div class="text-start col-3 mb-4" >
                <label class="fw-bold">Valor</label>
                <div class="text-light-emphasis bg-dark-subtle form-control my-1 mr-sm-2" >{{ this.product.price.toFixed(2)}}</div>
            </div>
            <div class="text-start col-3 mb-4" >
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="fw-bold form-check-label" for="flexCheckDefault">
                        Em destaque?
                    </label>
                </div>
            </div>
            <div class="col-2 d-flex justify-content-around">
                <button class="btn btn-primary btn-sm rounded px-3" type="submit">Salvar</button>
                <button class="btn text-primary btn-outline border border-primary btn-sm rounded px-3" type="submit">Cancel</button>
            </div>

        </div>
    </div>
  </template>

<script>

import axios from "axios";


export default {
    data(){
        return {
          product: {},
          categories: {},
          category: {}
        }
    },
    created(){
        axios
            .get(`http://127.0.0.1:3000/products/${this.$route.params.id}`)
            .then(response => {
            this.product = response.data;
            this.category = response.data.category
        }),
        axios
            .get(`http://127.0.0.1:3000/categories`)
            .then(response => {
            this.categories = response.data;
        })
    },
}
</script>