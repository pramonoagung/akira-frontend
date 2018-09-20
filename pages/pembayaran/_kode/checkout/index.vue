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
                            <form  @submit.prevent="cari">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-1">
                                        <div class="panel panel-flat">
                                            <div class="panel-heading">
                                                <h3 class="panel-title" style="text-align:center"><b>Pembayaran</b></h3>
                                            </div>
                                            
                                            <div class="panel-body">
                                                <div class="text-center">
                                                    <button type="submit" class="btn btn-primary">Selesai
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
    return {};
  },
  created() {
    axios.get(process.env.myapi);
  },
  methods: {}
};
</script>