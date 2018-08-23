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
                            <h5 class="panel-title">Workshift Terapis</h5>
                            <div class="heading-elements">
							    <nuxt-link to="/dashboard/aplikasi/manajemen/terapis/tambah">
                                    <button type="button" class="btn btn-success btn-raised btn-sm legitRipple">
                                    <i class="icon-plus2 position-left"></i>Tambah
                                    </button>
                                </nuxt-link>
	                	    </div>
                        </div>
                        <table class="table datatable-basic table-hover">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>Jam (WIB)</th>
                                    <th>Ruangan</th>
                                    <th>Status</th>
                                    <th class="text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Marth</td>
                                    <td>13.00 - 14.20</td>
                                    <td>-</td>
                                    <td>
                                        <span class="label label-success">Kosong</span>
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
                                                            <i class="icon-transmission"></i> Ubah kosong</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="icon-spinner10"></i> Ubah Update</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Yohan</td>
                                    <td>09.00 - 11.23</td>
                                    <td>Melati</td>
                                    <td>
                                        <span class="label label-danger">Tersisi</span>
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
                                                            <i class="icon-transmission"></i> Ubah kosong</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="icon-spinner10"></i> Ubah Update</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </td>
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