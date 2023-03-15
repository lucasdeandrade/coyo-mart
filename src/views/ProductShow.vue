<template>
  <div class="modal fade" id="confirmModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content p-4 dialog">
        <button
          type="button"
          class="col-1 align-self-end btn-close"
          data-bs-dismiss="modal"
        ></button>
        <div class="modal-body pt-2">
          <h1 class="col-auto modal-body fs-5">
            Tem certeza que quer excluir?
          </h1>
          <div class="row justify-content-center">
            <button
              type="button"
              class="col-3 m-3 mr-3 btn btn-primary"
              @click="deleteProduct"
            >
              Sim
            </button>
            <button
              type="button"
              class="col-3 m-3 mr-3 btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <header class="text-start text-white shadow-sm px-2 py-2 mb-4 bg-dark-subtle">
    <h3>Produtos</h3>
  </header>

  <div class="col-10 shadow main">
    <div class="row justify-content-between pt-3 px-3">
      <h5 class="card-title col-5 text-start">Detalhes do Produto</h5>
      <div class="col-3 d-flex justify-content-around">
        <button
          class="col-5 btn btn-outline-primary btn-sm rounded"
          @click="goToEdit(product.id)"
        >
          Editar
        </button>
        <button
          type="button"
          class="col-5 btn btn-outline-danger btn-sm rounded"
          data-bs-toggle="modal"
          data-bs-target="#confirmModal"
        >
          Deletar
        </button>
      </div>
    </div>
    <hr class="mx-2" />
    <div class="card-body p-3 pt-0">
      <div class="text-start col-6 mb-4">
        <label class="fw-bold">Nome</label>
        <div class="text-light-emphasis bg-dark-subtle form-control">
          {{ this.product.name }}
        </div>
      </div>
      <div class="text-start col-6 mb-4" name="description-product">
        <label class="fw-bold text">Descrição</label>
        <div class="form-floating">
          <textarea
            v-bind:readonly="true"
            class="bg-dark-subtle text-light-emphasis form-control"
            v-model="product.description"
            id="floatingTextarea2"
            style="height: 100px"
          ></textarea>
        </div>
      </div>
      <div class="text-start col-3 mb-4" name="description-product">
        <label class="fw-bold">Categorias</label>
        <div class="text-light-emphasis bg-dark-subtle form-control">
          {{ this.product.category.description }}
        </div>
      </div>
      <div class="text-start col-3 mb-4">
        <label class="fw-bold">Unidade de Medida</label>
        <div class="text-light-emphasis bg-dark-subtle form-control">
          {{ this.product.unit_type }}
        </div>
      </div>
      <div class="text-start col-3 mb-4">
        <label class="fw-bold">Quantidade em estoque</label>
        <div
          class="text-light-emphasis bg-dark-subtle form-control my-1 mr-sm-2"
        >
          {{ this.product.stock }}
        </div>
      </div>
      <div class="text-start col-3 mb-4">
        <label class="fw-bold">Valor por {{ this.product.unit_type }}</label>
        <div
          class="text-light-emphasis bg-dark-subtle form-control my-1 mr-sm-2"
        >
          {{ this.product.price.toFixed(2) }}
        </div>
      </div>
      <div class="text-start col-3 mb-4">
        <div class="form-check">
          <input
            class="form-check-input"
            disabled
            :checked="this.product.featured"
            type="checkbox"
            id="flexCheckDefault"
          />
          <label class="fw-bold form-check-label" for="flexCheckDefault">
            Em destaque?
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      product: {},
      categories: {},
      category: {},
    };
  },
  async created() {
    axios
      .get(`http://127.0.0.1:3000/products/${this.$route.params.id}`)
      .then((response) => {
        this.product = response.data;
        this.category = response.data.category;
      }),
      axios.get(`http://127.0.0.1:3000/categories`).then((response) => {
        this.categories = response.data;
      });
  },
  methods: {
    goToEdit(id) {
      this.$router.push("/products/" + id + "/edit");
    },
    async deleteProduct() {
      try {
        await axios
          .delete(`http://127.0.0.1:3000/products/${this.$route.params.id}`)
          .then(this.$router.push("/products"));
        location.reload();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  border-radius: 30px;
}
</style>
