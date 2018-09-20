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
                        <div class="heading-elements">
							    <nuxt-link to="/voucher/tambah">
                                    <button type="button" class="btn btn-success btn-raised btn-sm legitRipple">
                                    <i class="icon-plus2 position-left"></i>Tambah
                                    </button>
                                </nuxt-link>
	                	</div>
                    </div>
                    <table class="table datatable-basic table-hover">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Kode</th>
                                <th>Jenis</th>
                                <th>Jumlah</th>
                                <th>Tanggal Kadaluarsa</th>
                                <th class="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(voucher, index) in vouchers" :key="voucher.id">
                                <td>{{index+1}}</td>
                                <td>{{voucher.kode}}</td>
                                <td>{{voucher.jenis}}</td>
                                <td>{{voucher.jumlah}}</td>
                                <td>{{voucher.tanggal_kadaluarsa}}</td>
                                <td class="text-center">
                                    <ul class="icons-list">
                                        <li class="dropdown">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                                <i class="icon-menu9"></i>
                                            </a>

                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li>
                                                    <a @click="onEdit(voucher)">
                                                        <i class="icon-pencil"></i> Edit
                                                    </a>
                                                </li>
                                                <li>
                                                    <a @click="onDelete(voucher)">
                                                        <i class="icon-trash"></i> Hapus
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
    const { data } = await axios
      .get(
        process.env.myapi +
          "/graphql?query={Voucher{id,kode,jenis,syarat,jumlah,logo_voucher,tanggal_kadaluarsa,owner_id{username,nama}}}"
      )
      .then()
      .catch();
    return { vouchers: data.data.Voucher };
  },
  methods: {
    async onDelete(params) {
      await axios
        .post(
          process.env.myapi +
            "/graphql?query=mutation+a{DeleteVoucher(id:" +
            params.id +
            "){id kode}}"
        )
        .then(res => {
          this.$router.push("/voucher");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    async onEdit(params) {
      await axios
        .post(
          process.env.myapi +
            "/graphql?query=mutation{Voucher(id:" +
            params.id +
            "){id}"
        )
        .then(res => this.$router.push("/voucher/" + params.id + "/edit"))
        .catch(res => console.log(error));
    }
  }
};
</script>
