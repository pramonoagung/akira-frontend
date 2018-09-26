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
                            <form  @submit.prevent="bayar">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-1">
                                        <div class="panel panel-flat">
                                            <div class="panel-heading">
                                                <h3 class="panel-title" style="text-align:center"><b>Pembayaran</b></h3>
                                            </div>

                                            <div class="panel-body">
                                                <div class="form-group">
                                                    <label>Username</label>
                                                    <input type="text" v-model="username" readonly required class="form-control" placeholder="Username">
                                                </div>
                                                <div class="form-group">
                                                    <label>Kode</label>
                                                    <input type="text" v-model="kode" readonly required class="form-control" placeholder="Kode">
                                                </div>
                                                <div class="form-group">
                                                    <label>Total Harga</label>
                                                    <input type="text" v-model="total" readonly required class="form-control" placeholder="Kode">
                                                </div>
                                                <div class="form-group">
                                                    <label>Diskon</label>
                                                    <input type="text" v-model="kodeDiskon" required class="form-control" placeholder="Kode Diskon">
                                                    <br>
                                                    <button type="button" @click="cekKode" class="btn btn-info btn-sm position-left">Cek Kode
                                                    </button>
                                                </div>
                                                <div class="form-group">
                                                    <label>Potongan</label>
                                                    <input type="text" v-model="potongan" readonly required class="form-control">
                                                </div>
                                                <div class="text-right">
                                                    <button type="button" @click="onCancel" class="btn btn-danger position-left">Batal
                                                    </button>
                                                    <button type="submit" class="btn btn-primary">Bayar
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
      submitted: false,
      detail: "",
      username: "",
      kode: "",
      kodeDiskon: "",
      potongan: ""
    };
  },
  async created() {
    await axios
      .get(
        process.env.myapi +
          '/graphql?query={headerReservasi(kode: "' +
          this.$route.params.kode +
          '"){tamu,kode,detail_reservasi{header_reservasi_id,produk_id{id,harga,nama}}}}'
      )
      .then(res => {
        (this.username = res.data.data.headerReservasi[0].tamu),
          (this.kode = res.data.data.headerReservasi[0].kode),
          (this.detail = res.data.data.headerReservasi[0].detail_reservasi);
      })
      .catch(err => console.log(err));
  },
  methods: {
    async bayar() {
      await axios
        .post(
          process.env.myapi +
            '/graphql?query=mutation{CreateHeader(ref_id:"' +
            this.kode +
            '", jenis: "Tunai", jumlah: "' +
            this.total +
            '", referensi: "' +
            this.kodeDiskon +
            '",diskon:"' +
            this.nilaiDiskon +
            '"){id,nomor,id_detail{id,ref_id}}}'
        )
        .then(res => {
          alert("Pembayaran Sukses!");
          window.location = "/pembayaran";
        })
        .catch(err => console.log(err));
    },
    async cekKode() {
        await axios
        .post(
          process.env.myapi + '')
    },
    onCancel() {
      this.$router.push("/pembayaran");
    }
  },
  computed: {
    total: function() {
      let total = [];
      Object.entries(this.detail).forEach(([key, val]) => {
        total.push(val.produk_id.harga);
      });
      return total.reduce(function(total, num) {
        return total + num;
      }, 0);
    }
  }
};
</script>