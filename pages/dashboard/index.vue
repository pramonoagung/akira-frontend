<template>
    <div>
        <!-- Page container -->
        <div class="page-container">

            <!-- Page content -->
            <div class="page-content">

                <!-- Main content -->
                <div class="content-wrapper">

                    <div class="row">
                        <div class="col-lg-12">
                            
                            <div class="row">
                                <div class="col-lg-3">

                                    <div class="panel bg-teal-400">
                                        <div class="panel-body">
                                            <h3 class="no-margin">450</h3>
                                            Pelanggan
                                        </div>
                                    </div>

                                </div>

                                <div class="col-lg-3">

                                    <div class="panel bg-pink-400">
                                        <div class="panel-body">
                                            <h3 class="no-margin">49</h3>
                                            Transaksi sukses
                                        </div>

                                        <div id="server-load"></div>
                                    </div>

                                </div>

                                <div class="col-lg-3">
                                    <div class="panel bg-blue-400">
                                        <div class="panel-body">
                                            <h3 class="no-margin">183</h3>
                                            Reservasi hari ini
                                        </div>

                                        <div id="today-revenue"></div>
                                    </div>
                                </div>

                                <div class="col-lg-3">

                                    <div class="panel bg-blue-400">
                                        <div class="panel-body">
                                            <h3 class="no-margin">12</h3>
                                            Terapis Kosong
                                        </div>

                                        <div id="today-revenue"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="panel panel-flat">
                        <div class="panel-heading">
                            <h5 class="panel-title">Daftar Terapist</h5>
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
                    
                    <div class="panel panel-flat">
                        <div class="panel-heading">
                            <h5 class="panel-title">Daftar Reservasi</h5>
                        </div>
                        <table class="table datatable-basic table-hover">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>Tanggal Pemesanan</th>
                                    <th>Status</th>
                                    <th class="text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Marth</td>
                                    <td>17 Agustus 2019</td>
                                    <td>
                                        <span class="label label-success">Diterima</span>
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
                                                            <i class="icon-transmission"></i> Ubah Ditolak</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Martin Praja</td>
                                    <td>32 Desember 2019</td>
                                    <td>
                                        <span class="label label-default">Ditolak</span>
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
                                                            <i class="icon-transmission"></i> Ubah Diterima</a>
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