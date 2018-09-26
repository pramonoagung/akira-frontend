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
                            <form  @submit.prevent="cari">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-1">
                                        <div class="panel panel-flat">
                                            <div class="panel-heading">
                                                <h3 class="panel-title" style="text-align:center"><b>Check In</b></h3>
                                            </div>
                                            <div class="panel-body">
                                                <div class="form-group">
                                                    <input v-model="kode" type="text" required class="form-control" placeholder="Kode Reservasi">
                                                </div>
                                                <div class="text-center">
                                                    <button type="submit" class="btn btn-primary">Cari
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-offset-1 col-md-10" v-show="status=='kode'">
                            <div class="row">
                                <div class="col-md-10 col-md-offset-1">
                                    <div class="panel panel-flat">
                                        <div class="panel-heading">
                                            <h3 class="panel-title"><b>Hasil Pencarian</b></h3>
                                            <div class="heading-elements">
                                                    <button @click="bersihkan" type="button" class="btn btn-warning btn-raised btn-sm legitRipple">
                                                    <i class="icon-trash position-left"></i>Bersihkan
                                                    </button>
                                            </div>
                                        </div>
                                        <div class="panel-body">
                                            <table class="table datatable-basic table-hover" v-if="hasil!=''">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Username</th>
                                                        <th>Produk</th>
                                                        <th>Terapis</th>
                                                        <th class="text-center">Aksi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(item, index) in hasil" :key="index">
                                                        <td>{{index+1}}</td>
                                                        <td>{{item.tamu}}</td>
                                                        <td v-if="item.detail_reservasi.length > 1">
                                                            <nuxt-link :to="'/reservasi/'+item.detail_reservasi[0].header_reservasi_id+'/detail'">
                                                                <a>Detail</a>
                                                            </nuxt-link>
                                                        </td>
                                                        <td v-else>{{item.detail_reservasi[0].produk_id.nama}}</td>
                                                        <td v-if="item.detail_reservasi.length > 1">-</td>
                                                        <td v-else>{{item.detail_reservasi[0].karyawan_id.nama}}</td>
                                                        <td class="text-center">
                                                            <a class="label label-info" @click="checkin(item.kode)">CHECK IN!</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div v-else>Hasil Tidak Ditemukan</div>
                                        </div>
                                    </div>
                                </div>
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
      kode: "",
      username: "",
      jenis: "",
      hasil: "",
      status: ""
    };
  },
  methods: {
    async cari() {
      await axios
        .post(
          process.env.myapi +
            '/graphql?query={headerReservasi(kode:"' +
            this.kode +
            '",status: "konfirm", progress: "konfirm"){tamu, kode, detail_reservasi{header_reservasi_id,produk_id{nama}, karyawan_id{ nama } }}}'
        )
        .then(res => {
          (this.hasil = res.data.data.headerReservasi), (this.status = "kode");
        })
        .catch(error => console.log(error));
    },
    async checkin(kode) {
      if (confirm("Apakah anda yakin ?")) {
        await axios
          .post(
            process.env.myapi +
              '/graphql?query=mutation{CheckinReservasi(ref_id:"' +
              kode +
              '"){id, status, progress}}'
          )
          .then(res => alert("Sukses!"), this.bersihkan())
          .catch(error => console.log(error));
      } else {
      }
    },
    bersihkan() {
      this.status = "";
    }
  }
};
</script>