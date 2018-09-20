<template>
    <div v-if="workshifts">
        <!-- Page container -->
        <div class="page-container">

            <!-- Page content -->
            <div class="page-content">

                <!-- Main content -->
                <div class="content-wrapper">

                    <div class="panel panel-flat">
                        <div class="panel-heading">
                            <h5 class="panel-title">Workshift Terapis</h5>
                        </div>
                        <table class="table datatable-basic table-hover">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>Penempatan</th>
                                    <th class="text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(workshift, index) in workshifts" :key="workshift.id">
                                    <td>{{index+1}}</td>
                                    <td>{{workshift.nama}}</td>
                                    <td>{{workshift.penempatan[0].posisi}}</td>
                                    <td class="text-center">
                                        <a @click="getDetail(workshift.id)">Detail</a>
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
  async asyncData({ params }) {
    let { data } = await axios.get(
      process.env.myapi +
        "/graphql?query={KaryawanQuery{id,uuid,nip,nama,jenis_kelamin,rating,penempatan{posisi,tanggal_mulai,tanggal_berakhir,workshift{hari,jam_mulai,jam_akhir}ketersediaan{hari,jam_mulai,jam_akhir}}}}"
    );
    return { workshifts: data.data.KaryawanQuery };
  },
  methods: {
    getDetail(id) {
      this.$router.push("/terapis/workshift/" + id + "/detail");
    }
  }
};
</script>