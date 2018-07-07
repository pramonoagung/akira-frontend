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
                            <form action="#">
                                <div class="row">
                                    <div class="col-md-10 col-md-offset-1">
                                        <div class="panel panel-flat">
                                            <div class="panel-heading">
                                                <h3 class="panel-title" style="text-align:center">
                                                    <b>Edit Voucher = {{$route.params.id}}</b>
                                                </h3>
                                            </div>

                                            <div class="panel-body">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Kode">
                                                </div>

                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Nilai">
                                                </div>

                                                <div class="text-right">
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
export default {
  layout: "dashboard"
};
</script>