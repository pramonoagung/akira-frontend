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
                                                    <label><b>Username</b> </label>
                                                    <input type="text" v-model="username" readonly required class="form-control" placeholder="Username">
                                                </div>
                                                <div class="form-group">
                                                    <label><b>Kode</b> </label>
                                                    <input type="text" v-model="kode" readonly required class="form-control" placeholder="Kode">
                                                </div>
                                                <div class="form-group">
                                                    <label><b>Total Harga (Rp)</b> </label>
                                                    <input type="text" v-model="total" readonly required class="form-control" placeholder="Kode">
                                                </div>
                                                <div class="form-group">
                                                    <label><b>Diskon</b> </label>
                                                    <input type="text" v-model="kodeDiskon" required class="form-control" placeholder="Kode Diskon">
                                                    <br>
                                                    <button type="button" :disabled="submitted" @click="cekKode" class="btn btn-info btn-sm position-left">Cek Kode
                                                    </button>
                                                </div>
                                                <div class="form-group">
                                                    <label><b>Potongan (Rp)</b></label>
                                                    <input type="text" v-model="potongan" readonly required class="form-control">
                                                </div>
                                                <div class="form-group">
                                                    <h5><b>Total Tagihan Anda</b></h5>
                                                    <h6><b style="color:green">Rp {{tagihan}}</b></h6> 
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
      potongan: "",
      tagihan: ""
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
          (this.detail = res.data.data.headerReservasi[0].detail_reservasi),
          (this.tagihan = this.total);
      })
      .catch(err => console.log(err));
  },
  methods: {
    async bayar() {
      if (confirm("Apakah Anda Yakin !")) {
        if (this.potongan == "" || this.potongan == 0) {
          await axios
            .post(
              process.env.myapi +
                '/graphql?query=mutation{CreateHeader(ref_id:"' +
                this.kode +
                '", jenis: "Tunai", jumlah: "' +
                this.total +
                '"){id,nomor,id_detail{id,ref_id}}}'
            )
            .then(res => {
              alert("Pembayaran Sukses!");
              window.location = "/pembayaran";
            })
            .catch(err => console.log(err));
        } else {
          await axios
            .post(
              process.env.myapi +
                '/graphql?query=mutation{CreateHeader(ref_id:"' +
                this.kode +
                '", jenis: "Tunai", jumlah: "' +
                (this.total - this.potongan) +
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
        }
      } else {
      }
    },
    async cekKode() {
      await axios
        .post(
          process.env.myapi +
            '/graphql?query={CheckVoucherQuery(kode:"' +
            this.kodeDiskon +
            '"){kode,jumlah}}'
        )
        .then(res => {
          if (res.data.data.CheckVoucherQuery.jumlah != 0) {
            (this.potongan = res.data.data.CheckVoucherQuery.jumlah),
              (this.tagihan = this.total - this.potongan),
              (this.submitted = true);
          } else {
            alert("Voucher tidak tersedia atau hangus");
          }
        })
        .catch(err => console.log(err));
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