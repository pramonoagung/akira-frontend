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
                            <h5 class="panel-title">Laporan Transaksi</h5>
                            <div class="heading-elements">
                                <button @click="cetak" type="button" class="btn btn-info btn-raised btn-sm legitRipple">
                                    <i class="icon-printer position-left"></i>Cetak
                                </button>
	                	    </div>
                        </div>
                        <table class="table datatable-basic table-hover" >
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nomor Transaksi</th>
                                    <th>Referensi ID</th>
                                    <th>Total (Rp)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for=" (transaksi, index) in allTransaksi" :key="transaksi.id">
                                    <td>{{index+1}}</td>
                                    <td>{{transaksi.nomor}}</td>
                                    <td>{{transaksi.id_detail[0].ref_id}}</td>
                                    <td>{{transaksi.id_pembayaran[0].jumlah}}</td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- <div class="panel-body">
                            <div class="text-right">
                                <button type="button" @click="onCancel" class="btn btn-danger position-left">Tolak
                                </button>
                                <button type="submit" :disabled="submitted" @click="terima(header_reservasi)" class="btn btn-success">Terima
                                </button>
                            </div>
                        </div> -->
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
  data() {
    return {
      perPage: 6,
      totalPage: 0,
      page: 1,
      skip: 0
    };
  },
  methods: {
    cetak() {
      window.print();
    },
    next(page) {
      this.$nuxt._router.replace({ path: "/laporan/transaksi?page=" + page });
      window.location.reload(true);
    }
  }
};
</script>