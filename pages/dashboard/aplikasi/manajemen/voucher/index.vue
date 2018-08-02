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
							    <nuxt-link to="/dashboard/aplikasi/manajemen/voucher/tambah">
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
                                <th>Tanggal Kadaluarsa</th>
                                <th class="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(voucher, index) in vouchers" :key="voucher.id">
                                <td>{{index+1}}</td>
                                <td>{{voucher.kode}}</td>
                                <td>{{voucher.jenis}}</td>
                                <td>{{voucher.tanggal_kadaluarsa}}</td>
                                <td class="text-center">
                                    <ul class="icons-list">
                                        <li class="dropdown">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                                <i class="icon-menu9"></i>
                                            </a>

                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li>
                                                    <nuxt-link to="/dashboard/aplikasi/manajemen/voucher/1/edit">
                                                        <i class="icon-pencil"></i> Edit
                                                    </nuxt-link>
                                                </li>
                                                <li>
                                                    <nuxt-link to="/dashboard/aplikasi/manajemen/voucher/1/edit">
                                                        <i class="icon-trash"></i> Hapus
                                                    </nuxt-link>
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
    const { data } = await axios.get(
      process.env.myapi +
        "/graphql?query={Voucher{kode,jenis,tanggal_kadaluarsa}}"
    );
    return { vouchers: data.data.Voucher };
  }
};
</script>
