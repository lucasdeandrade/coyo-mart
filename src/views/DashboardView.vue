<template>
  <header class="text-start text-white shadow-sm px-2 py-2 mb-4 bg-dark-subtle">
    <h3>Dashboard</h3>
  </header>
  <div class="row p-1 mb-2">
    <div
      class="col-4 shadow m-2 fw-bold"
      style="cursor: pointer"
      @click="this.$router.push('/products')"
    >
      <div class="row m-2 text-start">
        <div class="col-8 text-start">
          <p class="fw-bold">Produtos Cadastrados</p>
          <h1 class="fw-bold">{{ this.$store.state.products.length }}</h1>
        </div>
        <div class="col text-start">
          <img
            class="img-fluid iconImg"
            src="../assets/productsImg.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div
      class="col-4 shadow m-2 fw-bold"
      style="cursor: pointer"
      @click="this.$router.push('/clients')"
    >
      <div class="row m-2 text-start">
        <div class="col-8 text-start">
          <p class="fw-bold">Clientes Cadastrados</p>
          <h1 class="fw-bold">{{ this.$store.state.clients.length }}</h1>
        </div>
        <div class="col text-start">
          <img
            class="img-fluid iconImg"
            src="../assets/clientImg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div class="col-11 shadow">
    <div class="row justify-content-between pt-3 px-3">
      <h5 class="card-title col-5 align-self-center pb-0 text-start">
        Listagem de Produtos em Destaque
      </h5>
      <div class="col-4 align-self-end input">
        <div class="row mt-2">
          <input
            type="text"
            class="col mx-2 form-control"
            placeholder="Procurar"
            aria-label="Search"
            v-model="searchFeatured"
          />
        </div>
      </div>
    </div>
    <hr class="mx-2" />
    <div class="p-2 main-dashboard">
      <table class="table table-hover">
        <thead>
          <tr class="bg-dark-subtle">
            <th>Imagem</th>
            <th>Nome do Produto</th>
            <th>UN</th>
            <th>Preço</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(product, index) in filteredProductsFeatured"
            :key="index"
            @click="showProduct(product.id)"
          >
            <td class="col">
              <div class="card bg-body-secondary productImg">
                <img src="" alt="" />
              </div>
            </td>
            <td class="col">
              <p>{{ product.name }}</p>
            </td>
            <td class="col">
              <p>{{ product.unit_type }}</p>
            </td>
            <td class="col">
              <p>{{ product.price.toFixed(2) }}</p>
            </td>
            <td class="col">
              <p>{{ product.stock }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardView",
  data() {
    return {
      searchFeatured: "",
    };
  },
  computed: {
    filteredProductsFeatured() {
      return this.$store.state.products.filter((product) => {
        return (
          product.name
            .toLowerCase()
            .includes(this.searchFeatured.toLowerCase()) &&
          product.featured == true
        );
      });
    },
  },
  methods: {
    showProduct(id) {
      this.$router.push(`/products/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.productImg {
  height: 40px;
  width: 40px;
}
.iconImg {
  height: 60px;
  width: 60px;
}
.main-dashboard {
  max-height: 45vh;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }
  &::-webkit-scrollbar {
    width: 10px; /* width of the entire scrollbar */
    /* color of the tracking area */
  }
  &::-webkit-scrollbar-thumb {
    background-color: lightgray; /* color of the scroll thumb */
    border-radius: 20px;
  }
}
</style>