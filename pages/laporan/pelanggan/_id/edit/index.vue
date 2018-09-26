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
                            <form @submit.prevent="onSave">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-1">
                                        <div class="panel panel-flat">
                                            <div class="panel-heading">
                                                <h3 class="panel-title" style="text-align:center"><b>Edit Pelanggan</b></h3>
                                            </div>

                                            <div class="panel-body">
                                                <div class="form-group">
                                                    <input type="text" v-model="username" class="form-control" required placeholder="Username">
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control" v-model="nama" required placeholder="Nama">
                                                </div>
                                                <div class="text-right">
                                                    <button type="button" @click="onCancel" class="btn btn-danger position-left">Batal
                                                    </button>
                                                    <button type="submit" class="btn btn-primary">Simpan
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
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
      username: "",
      nama: ""
    };
  },
  async created() {
    await axios
      .get(
        process.env.myapi +
          "/graphql?query={users(id:" +
          this.$route.params.id +
          "){id,nama,username}}"
      )
      .then(res => {
        (this.username = res.data.data.users[0].username),
          (this.nama = res.data.data.users[0].nama);
      })
      .catch(error => console.log(error));
  },
  methods: {
    async onSave() {
      await axios
        .post(
          process.env.myapi +
            "/graphql?query=mutation+a{changeProfile(id:" +
            this.$route.params.id +
            ', username:"' +
            this.username +
            '", nama:"' +
            this.nama +
            '"){id}}'
        )
        .then(response => {
          this.$router.push("/laporan/pelanggan");
        })
        .catch(error => console.log(error));
    },
    onCancel() {
      this.$router.push("/laporan/pelanggan");
    }
  }
};
</script>