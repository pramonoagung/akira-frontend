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
                                                <h3 class="panel-title" style="text-align:center"><b>Edit Produk</b></h3>
                                            </div>

                                            <div class="panel-body">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" v-model="produk.nama" placeholder="Nama">
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
                                                    <button type="submit" class="btn btn-primary">Simpan
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
        kode: "",
        waktu: "",
        harga: "",
        deskripsi: ""
      }
    };
  },
  async created() {
    await axios
      .get(
        process.env.myapi +
          "/graphql?query={produk(id:" +
          this.$route.params.id +
          "){id,nama,kode,waktu, harga, deskripsi}}"
      )
      .then(res => {
        (this.produk.nama = res.data.data.produk[0].nama),
          (this.produk.kode = res.data.data.produk[0].kode),
          (this.produk.waktu = res.data.data.produk[0].waktu),
          (this.produk.harga = res.data.data.produk[0].harga),
          (this.produk.deskripsi = res.data.data.produk[0].deskripsi);
      })
      .catch(error => console.log(error));
  },
  methods: {
    onSave() {
      if (this.produk.deskripsi == "") {
        axios
          .post(
            process.env.myapi +
              "/graphql?query=mutation{updateProduk(id:" +
              this.$route.params.id +
              ',nama:"' +
              this.produk.nama +
              '", kode:"' +
              this.produk.kode +
              '", waktu:' +
              this.produk.waktu +
              ", harga:" +
              this.produk.harga +
              "){nama}}"
          )
          .then(response => {
            this.$router.push("/produk");
          })
          .catch(error => console.log(error));
      } else {
        axios
          .post(
            process.env.myapi +
              "/graphql?query=mutation{updateProduk(id:" +
              this.$route.params.id +
              ',nama:"' +
              this.produk.nama +
              '", kode:"' +
              this.produk.kode +
              '", waktu:' +
              this.produk.waktu +
              ", harga:" +
              this.produk.harga +
              ', deskripsi:"' +
              this.produk.deskripsi +
              '"){nama}}'
          )
          .then(response => {
            this.$router.push("/produk");
          })
          .catch(error => console.log(error));
      }
    },
    onCancel() {
      this.$router.push("/produk");
    }
  }
};
</script>