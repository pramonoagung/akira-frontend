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
                        <h5 class="panel-title">Daftar Admin</h5>
                        <div class="heading-elements">
							    <nuxt-link to="/dashboard/aplikasi/manajemen/admin/tambah">
                                    <button type="button" class="btn btn-success btn-raised btn-sm legitRipple">
                                    <i class="icon-plus2 position-left"></i>Tambah
                                    </button>
                                </nuxt-link>
	                	    </div>
                    </div>
                    <table class="table datatable-basic table-hover">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Email</th>
                                <th>Keanggotaan</th>
                                <th>Status Akun</th>
                                <th class="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Adam Levine</td>
                                <td>
                                    <a href="#">adam@levine.com</a>
                                </td>
                                <td>22 Jun 1972</td>
                                <td>
                                    <span class="label label-success">Aktif</span>
                                </td>
                                <td class="text-center">
                                    <ul class="icons-list">
                                        <li class="dropdown">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                                <i class="icon-menu9"></i>
                                            </a>

                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li>
                                                    <nuxt-link to="/dashboard/aplikasi/manajemen/admin/1/edit">
                                                        <i class="icon-pencil"></i> Edit
                                                    </nuxt-link>
                                                </li>
                                                <li>
                                                    <nuxt-link to="#">
                                                        <i class="icon-pencil"></i> Hapus
                                                    </nuxt-link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>Sabda</td>
                                <td>
                                    <a href="#">adam@levine.com</a>
                                </td>
                                <td>22 Jun 1972</td>
                                <td>
                                    <span class="label label-default">Tidak Aktif</span>
                                </td>
                                <td class="text-center">
                                    <ul class="icons-list">
                                        <li class="dropdown">
                                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                                <i class="icon-menu9"></i>
                                            </a>

                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li>
                                                    <a href="#">
                                                        <i class="icon-pencil"></i> Edit</a>
                                                </li>
                                                <li>
                                                    <nuxt-link to="#">
                                                        <i class="icon-pencil"></i> Hapus
                                                    </nuxt-link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
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
