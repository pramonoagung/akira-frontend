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
                                                    <input type="text" required v-model="kode" class="form-control" placeholder="Kode">
                                                </div>
                                                <div class="form-group">
                                                    <input type="number" required v-model="jumlah" class="form-control" placeholder="Jumlah">
                                                </div>
                                                <div class="form-group">
                                                    <input type="date" required v-model="tanggal_kadaluarsa" class="form-control" placeholder="Tanggal Kadaluarsa">
                                                </div>

                                                 <div class="text-right">
                                                    <button type="button" @click="onCancel" class="btn btn-danger position-left">Batal
                                                    </button>
                                                    <button type="submit" :disabled="submitted" class="btn btn-primary">Simpan
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
      kode: "",
      jumlah: "",
      tanggal_kadaluarsa: ""
    };
  },
  async created() {
    await axios
      .get(
        process.env.myapi +
          "/graphql?query={Voucher(id:" +
          this.$route.params.id +
          "){id,kode,jumlah,tanggal_kadaluarsa}}"
      )
      .then(res => {
        this.kode = res.data.data.Voucher[0].kode;
        this.jumlah = res.data.data.Voucher[0].jumlah;
        this.tanggal_kadaluarsa = res.data.data.Voucher[0].tanggal_kadaluarsa;
      })
      .catch(err => console.log(err));
  },
  methods: {
    async onSave(id) {
      this.submitted = true;
      await axios
        .post(
          process.env.myapi +
            "/graphql?query=mutation{UpdateVoucher(id:" +
            this.$route.params.id +
            ',kode:"' +
            this.kode +
            '", jumlah:' +
            this.jumlah +
            "){id}}"
        )
        .then(res => this.$router.push("/voucher"))
        .catch(err => console.log(err));
    },
    onCancel() {
      this.$router.push("/voucher");
    }
  }
};
</script>