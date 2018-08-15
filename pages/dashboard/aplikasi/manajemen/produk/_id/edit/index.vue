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
                                                <h3 class="panel-title" style="text-align:center"><b>Edit Produk</b></h3>
                                            </div>

                                            <div class="panel-body">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Nama">
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" v-model="produk.kode" class="form-control" placeholder="kode">
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" v-model="produk.waktu" class="form-control" placeholder="Waktu">
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" v-model="produk.harga" class="form-control" placeholder="Harga">
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" v-model="produk.deskripsi" class="form-control" placeholder="Deskripsi">
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
      produk: {
        nama: "",
        kode: "WYSIWG",
        waktu: "",
        harga: "",
        deskripsi: ""
      }
    };
  },
  async created({ params }) {
    const { data } = await axios.get(
      process.env.myapi +
        "/graphql?query={produk(id:" +
        params.id +
        "){id,nama,kode,waktu, harga, deskripsi}}"
    );
    return { produk: data.data.produk };
  },
  methods: {
    onUpdate(param) {
      console.log(produk);
      axios
        .post(process.env.myapi + "")
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });
    },
    onCancel() {
      this.$router.push("/dashboard/aplikasi/manajemen/produk");
    }
  }
};
</script>