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
                                                <h3 class="panel-title" style="text-align:center"><b>Tambah Terapis Baru</b></h3>
                                            </div>

                                            <div class="panel-body">
                                                <div class="form-group">
                                                    <input type="text" v-model="terapis.nama" required class="form-control" placeholder="Nama">
                                                </div>
                                                <div class="form-group">
                                                    
                                                    <input type="radio" name="jk" id="l" value="l" v-model="terapis.jk">
                                                    <label for="l">Laki-laki</label>
                                                    <br>
                                                    <input type="radio" name="jk" id="p" value="p" v-model="terapis.jk">
                                                    <label for="p">Perempuan</label>
                                                </div>
                                                <div class="text-right">
                                                    <button type="button" @click="onCancel" class="btn btn-danger position-left">Batal
                                                    </button>
                                                    <button type="submit" class="btn btn-primary">Tambah
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
      terapis: {
        nama: "",
        jk: ""
      }
    };
  },
  methods: {
    async onSave() {
      await axios
        .post(
          process.env.myapi +
            '/graphql?query=mutation{CreateKaryawan(nama:"' +
            this.terapis.nama +
            '",jenis_kelamin:"' +
            this.terapis.jk +
            '"){nip,nama}}'
        )
        .then(res => this.$router.push("/terapis/manajemen"))
        .catch(error => console.log(error));
    },
    onCancel() {
      this.$router.push("/terapis/manajemen");
    }
  }
};
</script>