<template>
    <div>
        <!-- Page container -->
        <div class="page-container">

            <!-- Page content -->
            <div class="page-content">

                <!-- Main content -->
                <div class="content-wrapper">

                    <div class="row">
                        <div class="col-lg-12">

                            <div class="row">
                                <div class="col-lg-3">

                                    <div class="panel bg-teal-400">
                                        <div class="panel-body">
                                            <h3 class="no-margin">450</h3>
                                            Pelanggan
                                        </div>
                                    </div>

                                </div>

                                <div class="col-lg-3">

                                    <div class="panel bg-pink-400">
                                        <div class="panel-body">
                                            <h3 class="no-margin">49</h3>
                                            Transaksi sukses
                                        </div>

                                        <div id="server-load"></div>
                                    </div>

                                </div>

                                <div class="col-lg-3">
                                    <div class="panel bg-blue-400">
                                        <div class="panel-body">
                                            <h3 class="no-margin">{{reservasi.length}}</h3>
                                            Reservasi hari ini
                                        </div>

                                        <div id="today-revenue"></div>
                                    </div>
                                </div>

                                <div class="col-lg-3">

                                    <div class="panel bg-blue-400">
                                        <div class="panel-body">
                                            <h3 class="no-margin">12</h3>
                                            Terapis Kosong
                                        </div>

                                        <div id="today-revenue"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="panel panel-flat">
                        <div class="panel-heading">
                            <h5 class="panel-title">Daftar Reservasi</h5>
                        </div>
                        <table class="table datatable-basic table-hover">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Tanggal Reservasi</th>
                                    <th>Kode</th>
                                    <th>Username</th>
                                    <th>Produk</th>
                                    <th>Waktu (Menit)</th>
                                    <th>Terapis</th>
                                    <th class="text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(single, index) in reservasi" :key="single.id">
                                    <td>{{index+1}}</td>
                                    <td>{{single.header_reservasi_id.tanggal_reservasi}}</td>
                                    <td>{{single.header_reservasi_id.kode}}</td>
                                    <td>{{single.header_reservasi_id.tamu}}</td>
                                    <td v-if="single.header_reservasi_id.detail_reservasi.length > 1"><a @click="getDetail(single.header_reservasi_id.id)">Detail</a></td>
                                    <td v-else>{{single.header_reservasi_id.detail_reservasi[0].produk_id.nama}}</td>
                                    <td v-if="single.header_reservasi_id.detail_reservasi.length > 1">-</td>
                                    <td v-else>{{single.header_reservasi_id.detail_reservasi[0].produk_id.waktu}}</td>
                                    <td v-if="single.header_reservasi_id.detail_reservasi.length > 1">-</td>
                                    <td v-else>{{single.header_reservasi_id.detail_reservasi[0].karyawan_id.nama}}</td>
                                    <td class="text-center">
                                        <ul class="icons-list">
                                            <li class="dropdown">
                                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                                    <i class="icon-menu9"></i>
                                                </a>

                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li>
                                                        <a @click="terima(single.header_reservasi_id.kode)">
                                                            <i class="icon-checkmark"></i> Terima</a>
                                                    </li>
                                                    <li>
                                                        <a @click="tolak(single.header_reservasi_id.kode)">
                                                            <i class="icon-cross2" style="color:red"></i> Tolak</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
  async asyncData() {
    const { data } = await axios.get(
      process.env.myapi +
        '/graphql?query={statusReservasi(status:"pending"){id,header_reservasi_id{id,tanggal_reservasi,tamu,kode,detail_reservasi{produk_id{nama,waktu}karyawan_id{nip,nama}}}}}'
    );
    return { reservasi: data.data.statusReservasi };
  },
  async created() {
    await axios
      .get(
        process.env.myapi +
          '/graphql?query={statusReservasi(status:"pending"){id,header_reservasi_id{id,tanggal_reservasi,tamu,kode,detail_reservasi{produk_id{nama,waktu}karyawan_id{nip,nama}}}}}'
      )
      .then(res => console.log(res.data.data));
  },
  methods: {
    async getDetail(id) {
      this.$router.push("/reservasi/" + id + "/detail");
    },
    async tolak(kode) {
      await axios
        .post(
          process.env.myapi +
            '/graphql?query=mutation{TolakReservasi(ref_id:"' +
            kode +
            '"){status,progress}}'
        )
        .then(res => (window.location = "/dashboard"))
        .catch(err => console.log(err));
    },
    async terima(kode) {
      await axios
        .post(
          process.env.myapi +
            '/graphql?query=mutation{TerimaReservasi(ref_id:"' +
            kode +
            '"){status,progress}}'
        )
        .then(res => (window.location = "/dashboard"))
        .catch(err => console.log(err));
    }
  }
};
</script>