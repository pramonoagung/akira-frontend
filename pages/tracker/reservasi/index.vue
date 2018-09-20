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
                            <h5 class="panel-title">Tracker Reservasi</h5>
                        </div>
                        
                        <table class="table datatable-basic table-hover">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Kode Reservasi</th>
                                    <th>Username</th>
                                    <th>Status</th>
                                    <th>Progress</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for=" (single, index) in trackers" :key="single.id">
                                    <td>{{index+1}}</td>
                                    <td>{{single.kode}}</td>
                                    <td>{{single.tamu}}</td>
                                    <td>{{single.status_reservasi[0].status}}</td>
                                    <td>{{single.status_reservasi[0].progress}}</td>
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
        "/graphql?query={headerReservasi{kode,tamu,status_reservasi{status,progress}}}"
    );
    return { trackers: data.data.headerReservasi };
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