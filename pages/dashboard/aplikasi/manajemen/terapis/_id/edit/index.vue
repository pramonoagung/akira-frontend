<template>
    <div>
        <!-- Page container -->
        <div class="page-container">

            <!-- Page content -->
            <div class="page-content">

                <!-- Main content -->
                <div class="content-wrapper">

                    <div class="row">
                        <div class="col-md-offset-3 col-md-6">
                            <form @submit.prevent="onUpdate">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-1">
                                        <div class="panel panel-flat">
                                            <div class="panel-heading">
                                                <h3 class="panel-title" style="text-align:center"><b>Edit Terapis {{terapis.nama}}</b></h3>
                                            </div>

                                            <div class="panel-body">
                                                <div class="form-group">
                                                    <input type="text" v-model="terapis.nama" class="form-control" placeholder="Nama">
                                                </div>

                                                <div class="text-right">
                                                    <button type="button" @click="onCancel" class="btn btn-danger position-left">Batal
                                                    </button>
                                                    <button type="submit" class="btn btn-primary">Tambah
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  layout: "dashboard",
  data() {
    return {
      terapis: {
        nama: "AA",
        rating: "",
        status: ""
      }
    };
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      process.env.myapi +
        "/graphql?query={terapis(id:1){id,nama,rating,status}}"
    );
    return { terapis: data.data.terapis };
  },
  methods: {
    onUpdate(param) {
      axios
        .post(
          process.env.myapi +
            '/graphql?query=mutation{updateTerapis(id:"' +
            this.params.id +
            ',nama:"' +
            this.terapis.nama +
            '"){nama}}'
        )
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });
    },
    onCancel() {
      this.$router.push("/dashboard/aplikasi/manajemen/terapis");
    }
  }
};
</script>