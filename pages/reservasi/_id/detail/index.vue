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
                                <button v-if="status == 'pending' && progress == 'diterima'" type="button" @click="onCancel" class="btn btn-default position-left"><span class=" icon-circle-left2"> Kembali</span></button>
                                <nuxt-link v-if="status == 'konfirm' && progress == 'checkin'" to="/pembayaran">
                                   <button type="button" class="btn btn-default position-left"><span class=" icon-circle-left2"> Kembali</span></button>
                                </nuxt-link>
                                <nuxt-link v-else to="/check-in">
                                   <button type="button" class="btn btn-default position-left"><span class=" icon-circle-left2"> Kembali</span></button>
                                </nuxt-link>
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
                        <div class="panel-body" v-if="status == 'pending' && progress == 'diterima'">
                            <div class="text-right">
                                <button type="button" @click="tolak(header_reservasi)" class="btn btn-danger position-left">Tolak
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
      header_reservasi: "",
      status: "",
      progress: ""
    };
  },
  async created() {
    await axios
      .get(
        process.env.myapi +
          "/graphql?query={detailReservasi(header_reservasi_id:" +
          this.$route.params.id +
          "){header_reservasi_id,karyawan_id{nama}produk_id{nama,waktu}},statusReservasi(header_reservasi_id:" +
          this.$route.params.id +
          "){status,progress}}"
      )
      .then(res => {
        (this.reservasi = res.data.data.detailReservasi),
          (this.status = res.data.data.statusReservasi[0].status),
          (this.progress = res.data.data.statusReservasi[0].progress),
          (this.header_reservasi =
            res.data.data.detailReservasi[0].header_reservasi_id);
      })
      .catch(err => console.log(err));
  },
  methods: {
    async tolak(kode) {
      if (confirm("Apakah anda yakin ?")) {
        await axios
          .post(
            process.env.myapi +
              '/graphql?query=mutation{TolakReservasi(ref_id:"' +
              kode +
              '"){status,progress}}'
          )
          .then(res => this.$router.push("/dashboard"))
          .catch(err => console.log(err));
      } else {
      }
    },
    async terima(header_reservasi_id) {
      if (confirm("Apakah anda yakin ?")) {
        await axios
          .post(
            process.env.myapi +
              "/graphql?query=mutation{TerimaReservasi(header_reservasi_id:" +
              header_reservasi_id +
              "){status,progress}}"
          )
          .then(res => this.$router.push("/dashboard"))
          .catch(err => console.log(err));
      } else {
      }
    },
    onCancel() {
      this.$router.push("/dashboard");
    }
  }
};
</script>