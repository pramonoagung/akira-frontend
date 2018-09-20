<template>
    <div>
        <!-- Page container -->
        <div class="page-container">

            <!-- Page content -->
            <div class="page-content">

                <!-- Main content -->
                <div class="content-wrapper">

                    <div class="panel panel-flat">
                        <div class="panel-heading">
                            <h5 class="panel-title">Detail Reservasi</h5>
                            <div class="heading-elements">
                                <button type="button" @click="onCancel" class="btn btn-default position-left"><span class=" icon-circle-left2"> Kembali</span></button>
                            </div>
                        </div>
                        <table class="table datatable-basic table-hover">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Produk</th>
                                    <th>Waktu (Menit)</th>
                                    <th>Terapis</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in reservasi" :key="index">
                                    <td>{{index+1}}</td>
                                    <td>{{item.produk_id.nama}}</td>
                                    <td>{{item.produk_id.waktu}}</td>
                                    <td>{{item.karyawan_id.nama}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="panel-body">
                            <div class="text-right">
                                <button type="button" @click="onCancel" class="btn btn-danger position-left">Tolak
                                </button>
                                <button type="submit" :disabled="submitted" @click="terima(header_reservasi)" class="btn btn-success">Terima
                                </button>
                            </div>
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
      reservasi: "",
      header_reservasi: ""
    };
  },
  async created() {
    await axios
      .get(
        process.env.myapi +
          "/graphql?query={ detailReservasi(header_reservasi_id:" +
          this.$route.params.id +
          "){header_reservasi_id,karyawan_id{nama}produk_id{nama,waktu}}}"
      )
      .then(res => {
        (this.reservasi = res.data.data.detailReservasi),
          (this.header_reservasi =
            res.data.data.detailReservasi[0].header_reservasi_id);
      })
      .catch(err => console.log(err));
  },
  methods: {
    async tolak(kode) {
      await axios
        .post(
          process.env.myapi +
            '/graphql?query=mutation{TolakReservasi(ref_id:"' +
            kode +
            '"){status,progress}}'
        )
        .then(res => this.$router.push("/dashboard"))
        .catch(err => console.log(err));
    },
    async terima(header_reservasi_id) {
      await axios
        .post(
          process.env.myapi +
            "/graphql?query=mutation{TerimaReservasi(header_reservasi_id:" +
            header_reservasi_id +
            "){status,progress}}"
        )
        .then(res => this.$router.push("/dashboard"))
        .catch(err => console.log(err));
    },
    onCancel() {
      this.$router.push("/dashboard");
    }
  }
};
</script>