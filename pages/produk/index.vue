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
                            <h5 class="panel-title">Daftar Produk</h5>
                            <div class="heading-elements">
							    <nuxt-link to="/produk/tambah">
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
                                    <th>Nama</th>
                                    <th>Waktu (Menit)</th>
                                    <th>Harga (Rp)</th>
                                    <th class="text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for=" (single, index) in produk" :key="single.id">
                                    <td>{{index+1}}</td>
                                    <td>{{single.nama}}</td>
                                    <td><span class="badge badge-flat border-warning text-warning-600">{{single.waktu}}</span></td>
                                    <td>Rp {{single.harga}}</td>
                                    <td class="text-center">
                                        <ul class="icons-list">
                                            <li class="dropdown">
                                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                                    <i class="icon-menu9"></i>
                                                </a>

                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li>
                                                        <nuxt-link :to="'/produk/'+single.id+'/edit'">
                                                            <i class="icon-pencil"></i> Edit Produk
                                                        </nuxt-link>
                                                    </li>
                                                    <li @click="onDelete(single)">
                                                        <a style="color:red">
                                                            <i class="icon-trash"></i> <b>Hapus</b>
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
      process.env.myapi + "/graphql?query={produk{id,nama,waktu,harga}}"
    );
    return { produk: data.data.produk };
  },
  methods: {
    async onDelete(params) {
      await axios
        .post(
          process.env.myapi +
            "/graphql?query=mutation{deleteProduk(id:" +
            params.id +
            "){nama}}"
        )
        .then(function(response) {
          this.$router.go(this.$router.currentRoute);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>