<template>
  <header class="text-start text-white shadow-sm px-2 py-2 mb-4 bg-dark-subtle">
    <h3>Clientes</h3>
  </header>
  <div class="col-10 shadow main">
    <div class="row justify-content-between pt-3 px-3">
      <h5 class="card-title col-5 pb-0 text-start">Editando Cliente</h5>
    </div>
    <hr class="mx-3" />
    <form>
      <div class="card-body p-3 pt-0">
        <div class="text-start col-6 mb-4">
          <label class="fw-bold">Nome</label>
          <input
            type="name"
            class="form-control"
            required
            v-model="this.client.name"
          />
        </div>
        <div class="text-start col-3 mb-4">
          <label class="fw-bold">Cpf</label>
          <input
            type="text"
            class="form-control"
            required
            v-model="this.client.cpf"
          />
        </div>
        <div class="text-start col-6 mb-4">
          <label class="fw-bold">Email</label>
          <input
            type="email"
            class="form-control"
            required
            v-model="this.client.email"
          />
        </div>
        <div class="text-start col-3 mb-4">
          <label class="fw-bold">Telefone</label>
          <input
            type="tel"
            class="form-control"
            required
            placeholder="(xx) xxxxx-xxxx"
            v-model="this.client.phone"
          />
        </div>
        <div class="col-3 d-flex justify-content-around">
          <button
            class="btn btn-primary btn-sm rounded px-3"
            @click="submit"
            type="submit"
          >
            Salvar
          </button>
          <button
            class="
              btn
              text-primary
              btn-outline
              border border-primary
              btn-sm
              rounded
              px-3
            "
            @click="cancelSubmit"
            type="submit"
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      client: {},
    };
  },
  async created() {
    axios
      .get(`http://127.0.0.1:3000/clients/${this.$route.params.id}`)
      .then((response) => {
        this.client = response.data;
      });
  },
  methods: {
    async submit() {
      await axios
        .put(
          `http://127.0.0.1:3000/clients/${this.$route.params.id}`,
          this.client
        )
        .then((response) => {
          if (response.statusText == "OK") {
            this.$router.push(`/clients/${this.$route.params.id}`);
          }
        })
        .catch((error) => {
          if (error.response.status == 422) {
            if (error.response.data.cpf) {
              alert("Cpf já existente");
            }
            if (error.response.data.email) {
              alert("Email já existente");
            }
          }
        });
    },
    cancelSubmit() {
      this.$router.push(`/clients/${this.$route.params.id}`);
    },
  },
};
</script>