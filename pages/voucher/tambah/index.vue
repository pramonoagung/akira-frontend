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
                                                <h3 class="panel-title" style="text-align:center"><b>Tambah Voucher</b></h3>
                                            </div>

                                            <div class="panel-body">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" v-model="voucher.kode" required placeholder="Kode">
                                                </div>

                                                <div class="form-group">
                                                    <input type="number" class="form-control" v-model="voucher.jumlah" required placeholder="Jumlah">
                                                </div>

                                                <div class="form-group">
                                                    <input type="date" class="form-control" v-model="voucher.tanggal_kadaluarsa" required placeholder="Tanggal Kadaluarsa">
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
      voucher: {
        kode: "",
        jenis: "",
        tanggal_kadaluarsa: "",
        syarat: ""
      }
    };
  },
  methods: {
    onCancel() {
      this.$router.push("/voucher");
    },
    onSave() {
      axios
        .post(
          process.env.myapi +
            '/graphql?query=mutation+a{ CreateVoucher(kode: "' +
            this.voucher.kode +
            '", jumlah: "' +
            this.voucher.jumlah +
            '", tanggal_kadaluarsa: "' +
            this.voucher.tanggal_kadaluarsa +
            '", logo_voucher: "http://www.reevolveclothing.com/wp-content/uploads/2018/05/simple-a-picture-of-pikachu-is-gun-shooting-detective-now-and-his-game-coming-to.jpg") { id } }'
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => console.log(error));
    }
  }
};
</script>