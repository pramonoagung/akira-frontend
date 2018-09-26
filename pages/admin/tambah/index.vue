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
                            <form  @submit.prevent="onSave">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-1">
                                        <div class="panel panel-flat">
                                            <div class="panel-heading">
                                                <h3 class="panel-title" style="text-align:center"><b>Tambah Admin Baru</b></h3>
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
                                                    <select v-model="scope">
                                                        <option disabled value="">Pilih Scope</option>
                                                        <option>Admin</option>
                                                        <option>Owner</option>
                                                    </select>
                                                </div>
                                                <div class="text-right">
                                                    <button type="button" @click="onCancel" class="btn btn-danger position-left">Batal
                                                    </button>
                                                    <button type="submit" :disabled="submitted" class="btn btn-primary">Tambah
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
      submitted: false,
      nama: "",
      username: "",
      scope: ""
    };
  },
  methods: {
    async onSave() {
      (this.submitted = true),
        await axios
          .post(
            process.env.myapi +
              '/graphql?query=mutation{AddUser(nama:"' +
              this.nama +
              '", username:"' +
              this.username +
              '", scope:"Admin"){id,nama}}'
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