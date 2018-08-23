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
                            <form @submit.prevent="onSave">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-1">
                                        <div class="panel panel-flat">
                                            <div class="panel-heading">
                                                <h3 class="panel-title" style="text-align:center"><b>Tambah Produk Baru</b></h3>
                                            </div>

                                            <div class="panel-body">
                                                <div class="form-group">
                                                    <input type="text" v-model="produk.nama" required class="form-control" placeholder="Nama Produk">
                                                </div>
                                                <div class="form-group">
                                                    <input type="number" v-model="produk.waktu" required class="form-control" placeholder="Waktu dalam menit">
                                                </div>
                                                <div class="form-group">
                                                    <input type="number" v-model="produk.harga" required class="form-control" placeholder="Harga">
                                                </div>
                                                <div class="form-group">
                                                    <textarea class="form-control" v-model="produk.deskripsi" placeholder="Deskripsi produk"></textarea>
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
        waktu: "",
        harga: "",
        deskripsi: ""
      }
    };
  },
  methods: {
    onSave() {
      if (this.produk.deskripsi == null && this.produk.deskripsi == "") {
        axios
          .post(
            process.env.myapi +
              '/graphql?query=mutation+a{createProduk(nama:"' +
              this.produk.nama +
              '", waktu:' +
              this.produk.waktu +
              ", harga:" +
              this.produk.harga +
              "){nama}}"
          )
          .then(this.$router.push("/produk"))
          .catch(error => console.log(error));
      } else {
        axios
          .post(
            process.env.myapi +
              '/graphql?query=mutation+a{createProduk(nama:"' +
              this.produk.nama +
              '", waktu:' +
              this.produk.waktu +
              ", harga:" +
              this.produk.harga +
              ', deskripsi:"' +
              this.produk.deskripsi +
              '"){nama}}'
          )
          .then(this.$router.push("/produk"))
          .catch(error => console.log(error));
      }
    },
    onCancel() {
      window.location = "/produk";
    }
  }
};
</script>