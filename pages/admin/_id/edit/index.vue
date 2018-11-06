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
                            <form @submit.prevent="onUpdate">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-1">
                                        <div class="panel panel-flat">
                                            <div class="panel-heading">
                                                <h3 class="panel-title" style="text-align:center"><b>Edit Admin</b></h3>
                                            </div>

                                            <div class="panel-body">
                                                <div class="form-group">
                                                    <input type="text" v-model="nama" required class="form-control" placeholder="Nama">
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" v-model="username" required class="form-control" placeholder="Username">
                                                </div>
                                                <div class="form-group">
                                                    <label>Pilih Scope</label>
                                                    <br>
                                                    <select v-model="scopes">
                                                        <option disabled value="">Pilih Scope</option>
                                                        <option>Admin</option>
                                                        <option>Owner</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label>Pilih tenant</label>
                                                    <br>
                                                    <select v-model="tenant">
                                                        <option disabled value="">Pilih Scope</option>
                                                        <option>AKIRA</option>
                                                    </select>
                                                </div>
                                                <div class="text-right">
                                                    <button type="button" @click="onCancel" class="btn btn-danger position-left">Batal
                                                    </button>
                                                    <button :disabled="submitted" type="submit" class="btn btn-primary">Simpan
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
      nama: "",
      tenant: "",
      scopes: "",
      username: "",
      submitted: false
    };
  },
  async created() {
    await axios
      .get(
        process.env.myapi +
          "/graphql?query={users(id:" +
          this.$route.params.id +
          "){nama, username, organizations{nama, scopes}}}"
      )
      .then(res => {
        this.nama = res.data.data.users[0].nama;
        this.username = res.data.data.users[0].username;
        this.tenant = res.data.data.users[0].organizations[0].nama;
        this.scopes = res.data.data.users[0].organizations[0].scopes;
      })
      .catch(error => console.log(error));
  },
  methods: {
    onUpdate() {
      this.submitted = true;
      axios
        .post(
          process.env.myapi +
            "/graphql?query=mutation{changeProfile(id:" +
            this.$route.params.id +
            ', scope:"' +
            this.scopes +
            '",nama:"' +
            this.nama +
            '", username:"' +
            this.username +
            '"){id}}'
        )
        .then(res => this.$router.push("/admin"))
        .catch(error => console.log(error));
    },
    onCancel() {
      this.$router.push("/admin");
    }
  }
};
</script>