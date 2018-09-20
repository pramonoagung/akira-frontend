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
                            <h5 class="panel-title">Workshift Terapis <b style="color:orange">{{nama}}</b> </h5>
                            <div class="heading-elements">
                                <nuxt-link to="/terapis/workshift"><button type="button" class="btn btn-default position-left"><span class=" icon-circle-left2"> Kembali</span></button></nuxt-link>
                            </div>
                        </div>
                        
                        <table class="table datatable-basic table-hover">
                            <thead>
                                <tr>
                                    <th>Hari</th>
                                    <th>Jam Mulai</th>
                                    <th>Jam Berakhir</th>
                                    <th>Status</th>
                                    <th class="text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for=" (workshift, index) in penempatan" :key="index">
                                    <td>{{workshift.hari}}</td>
                                    <td>{{workshift.jam_mulai}}</td>
                                    <td>{{workshift.jam_akhir}}</td>
                                    <td v-if="workshift.flag==0"><span class="label label-warning">Libur</span></td>
                                    <td v-else><span class="label label-info">Masuk</span></td>
                                    <td class="text-center">
                                        <ul class="icons-list">
                                            <li class="dropdown">
                                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                                    <i class="icon-menu9"></i>
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-right">
                                                    <li @click="ubah(workshift.id)">
                                                        <a v-if="workshift.flag==1">
                                                            <i class="icon-transmission"></i> <b>Ubah libur</b>
                                                        </a>
                                                        <a v-else>
                                                            <i class="icon-transmission"></i> <b>Ubah Masuk</b>
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
  data() {
    return {
      nama: "",
      penempatan: ""
    };
  },
  async created() {
    await axios
      .get(
        process.env.myapi +
          "/graphql?query={KaryawanQuery(id:" +
          this.$route.params.id +
          "){nama,penempatan{workshift{id,hari,jam_mulai,jam_akhir,flag}}}}"
      )
      .then(res => {
        this.nama = res.data.data.KaryawanQuery[0].nama;
        this.penempatan =
          res.data.data.KaryawanQuery[0].penempatan[0].workshift;
      })
      .catch(err => console.log(err));
  },
  methods: {
    ubah(id) {
      console.log(id);
    }
  }
};
</script>