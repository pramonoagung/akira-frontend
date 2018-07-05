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
                            <h5 class="panel-title">Daftar Terapist</h5>
                        </div>
                        <table class="table datatable-basic table-hover">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Lengkap</th>
                                    <th>Status</th>
                                    <th>Edit</th>
                                    <th>Hapus</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Marth</td>
                                    <td>
                                        <span class="label label-success">Kosong</span>
                                    </td>
                                    <td><nuxt-link to="#">Edit</nuxt-link></td>
                                    <td><nuxt-link to="#">Hapus</nuxt-link></td>
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
export default {
  layout: "dashboard"
};
</script>