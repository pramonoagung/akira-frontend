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
                                                <h3 class="panel-title" style="text-align:center">
                                                    <b>Edit Voucher</b>
                                                </h3>
                                            </div>

                                          <div class="panel-body">
                                                <div class="form-group">
                                                    <label for=""><b>Kode</b></label>
                                                    <input type="text" class="form-control" v-model="voucher.kode" required placeholder="Kode">
                                                </div>

                                                <div class="form-group">
                                                    <label for=""><b>Jumlah (Rp)</b></label>
                                                    <input type="number" class="form-control" v-model="voucher.jumlah" required placeholder="Jumlah">
                                                </div>
                                                
                                                <div class="form-group">
                                                    <label for=""><b>Username Pemilik</b></label>
                                                    <input type="text" class="form-control" v-model="voucher.pemilik" required placeholder="Pemilik">
                                                </div>

                                                <div class="form-group">
                                                    <label for=""><b>Tanggal Kadaluarsa</b></label>
                                                    <input type="date" class="form-control" v-model="voucher.tanggal_kadaluarsa" required placeholder="Tanggal Kadaluarsa">
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
      voucher: {
        kode: "",
        pemilik: "",
        tanggal_kadaluarsa: "",
        jumlah: ""
      }
    };
  },
  async created() {
    await axios
      .get(
        process.env.myapi +
          "/graphql?query={Voucher(id:" +
          this.$route.params.id +
          "){kode,jenis,status,jumlah,tanggal_kadaluarsa,owner_id{username,nama}}}"
      )
      .then(res => {
        this.voucher.kode = res.data.data.Voucher[0].kode;
        this.voucher.jumlah = res.data.data.Voucher[0].jumlah;
        this.voucher.pemilik = res.data.data.Voucher[0].owner_id.username;
        this.voucher.tanggal_kadaluarsa =
          res.data.data.Voucher[0].tanggal_kadaluarsa;
      })
      .catch(err => console.log(err));
  },
  methods: {
    async onSave() {
      if (confirm("Apakah anda yakin ?")) {
        this.submitted = true;
        await axios
          .post(
            process.env.myapi +
              "/graphql?query=mutation{UpdateVoucher(id:" +
              this.$route.params.id +
              ',kode:"' +
              this.voucher.kode +
              '", jumlah:' +
              this.voucher.jumlah +
              ', username:"' +
              this.voucher.pemilik +
              '", tanggal_kadaluarsa:"' +
              this.voucher.tanggal_kadaluarsa +
              '"){id}}'
          )
          .then(res => {
            alert("Sukses!"), this.$router.push("/voucher");
          })
          .catch(err => alert("Gagal!"));
      } else {
      }
    },
    onCancel() {
      this.$router.push("/voucher");
    }
  }
};
</script>