<template>
<div>
    <!-- Page container -->
    <div class="page-container">

        <!-- Page content -->
        <div class="page-content">

            <!-- Main content -->
            <div class="content-wrapper">

                <!-- Basic datatable -->
                <div class="panel panel-flat">
                    <div class="panel-heading">
                        <h5 class="panel-title">Daftar Voucher</h5>
                    </div>
                    <table class="table datatable-basic table-hover">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Kode</th>
                                <th>Jenis</th>
                                <th>Jumlah</th>
                                <th>Pemilik</th>
                                <th>Tanggal Kadaluarsa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(voucher, index) in vouchers" :key="voucher.id">
                                <td>{{index+1}}</td>
                                <td>{{voucher.kode}}</td>
                                <td>{{voucher.jenis}}</td>
                                <td>{{voucher.jumlah}}</td>
                                <td>{{voucher.owner_id.nama}}</td>
                                <td>{{voucher.tanggal_kadaluarsa}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /basic datatable -->
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
        "/graphql?query={Voucher{id,kode,jenis,syarat,jumlah,logo_voucher,tanggal_kadaluarsa,owner_id{username,nama}}}"
    );
    return { vouchers: data.data.Voucher };
  },
  methods: {
    async onDelete(params) {
      await axios
        .post(
          process.env.myapi +
            "http://a99d67dc.ngrok.io/graphql?query=mutation{DeleteVoucher(id:" +
            params.id +
            "){id}"
        )
        .then(function(response) {
          //Calling asyncData [WIP]
          window.location = "/dashboard/aplikasi/manajemen/voucher";
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    async onEdit(params) {
      await axios
        .post(
          process.env.myapi +
            "http://a99d67dc.ngrok.io/graphql?query=mutation{Voucher(id:" +
            params.id +
            "){id}"
        )
        .then(function(response) {
          //Calling asyncData [WIP]
          window.location = "/dashboard/aplikasi/manajemen/voucher";
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
