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
                            <h5 class="panel-title">Daftar Pelanggan</h5>
                        </div>
                        
                        <table class="table datatable-basic table-hover">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Id</th>
                                    <th>Nomor Transaksi</th>
                                    <th>Referensi Id</th>
                                    <th>Username</th>
                                    <th class="text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for=" (transaksi, index) in allTransaksi" :key="transaksi.id">
                                    <td>{{index+1}}</td>
                                    <td>{{transaksi.id}}</td>
                                    <td>{{transaksi.nomor}}</td>
                                    <td>{{transaksi.id_detail[0].ref_id}}</td>
                                    <td>a</td>
                                    <td class="text-center">
                                        <ul class="icons-list">
                                            <li class="dropdown">
                                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                                    <i class="icon-menu9"></i>
                                                </a>

                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li @click="onDelete(transaksi.id)">
                                                        <a>
                                                            <i class="icon-eye8"></i> <b>Lihat Detail</b>
                                                        </a>
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
        "/graphql?query={HeaderTransaksi{id,nomor,id_detail{ref_id,produk,kuantitas,harga,diskon}id_pembayaran{jenis,jumlah,referensi}}}"
    );
    return { allTransaksi: data.data.HeaderTransaksi };
  },
  async created() {
    await axios
      .get(
        process.env.myapi +
          "/graphql?query={HeaderTransaksi{id,nomor,id_detail{ref_id,produk,kuantitas,harga,diskon}id_pembayaran{jenis,jumlah,referensi}}}"
      )
      .then(res => {
        console.log(res.data.data.HeaderTransaksi);
      })
      .catch(err => console.log(err));
  },
  methods: {
    onDelete(param) {
      console.log(param);
    }
  }
};
</script>