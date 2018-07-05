<template>
<div>
    <!-- Page container -->
    <div class="page-container">

        <!-- Page content -->
        <div class="page-content">

            <!-- Main content -->
            <div class="content-wrapper">

                <!-- Basic datatable -->
                <div class="panel panel-flat">
                    <div class="panel-heading">
                        <h5 class="panel-title">Rating Terapis</h5>
                    </div>
                    <div class="panel-body">Rating terapis diurutkan dari yang tertinggi</div>
                    <table class="table datatable-basic table-hover">
                        <thead>
                            <tr>
                                <th>Ranking</th>
                                <th>Nama</th>
                                <th>Rating</th>
                                <th>Pelanggan dilayani</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    Adam levine
                                </td>
                                <td><span class="badge badge-flat border-warning text-warning-600">45</span></td>
                                <td>
                                    200
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    Adam Hendra
                                </td>
                                <td><span class="badge badge-flat border-warning text-warning-600">15</span></td>
                                <td>
                                    200
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- /basic datatable -->
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
