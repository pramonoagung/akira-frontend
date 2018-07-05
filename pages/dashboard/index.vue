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
                            <!-- Quick stats boxes -->
                            <div class="row">
                                <div class="col-lg-3">

                                    <!-- Members online -->
                                    <div class="panel bg-teal-400">
                                        <div class="panel-body">
                                            <h3 class="no-margin">450</h3>
                                            Members terdaftar
                                        </div>
                                    </div>
                                    <!-- /members online -->

                                </div>

                                <div class="col-lg-3">

                                    <!-- Current server load -->
                                    <div class="panel bg-pink-400">
                                        <div class="panel-body">
                                            <h3 class="no-margin">49</h3>
                                            Transaksi
                                        </div>

                                        <div id="server-load"></div>
                                    </div>
                                    <!-- /current server load -->

                                </div>

                                <div class="col-lg-3">

                                    <!-- Today's revenue -->
                                    <div class="panel bg-blue-400">
                                        <div class="panel-body">
                                            <h3 class="no-margin">Rp 18390</h3>
                                            Pendapatan
                                        </div>

                                        <div id="today-revenue"></div>
                                    </div>
                                    <!-- /today's revenue -->
                                </div>

                                <div class="col-lg-3">

                                    <!-- Today's revenue -->
                                    <div class="panel bg-blue-400">
                                        <div class="panel-body">
                                            <h3 class="no-margin">Rp 18390</h3>
                                            Pendapatan
                                        </div>

                                        <div id="today-revenue"></div>
                                    </div>
                                    <!-- /today's revenue -->
                                </div>

                            </div>
                            <!-- /quick stats boxes -->
                        </div>
                    </div>

                    <!-- Basic datatable -->
                    <div class="panel panel-flat">
                        <div class="panel-heading">
                            <h5 class="panel-title">Daftar Terapist</h5>
                        </div>
                        <table class="table datatable-basic table-hover">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Alamat</th>
                                    <th>Check In</th>
                                    <th>Status</th>
                                    <th class="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Marth</td>
                                    <td>
                                        Enright
                                    </td>
                                    <td>Traffic Court Referee</td>
                                    <td>22 Jun 1972</td>
                                    <td>
                                        <span class="label label-success">Active</span>
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
                                                            <i class="icon-file-pdf"></i> Export to .pdf</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="icon-file-excel"></i> Export to .csv</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="icon-file-word"></i> Export to .doc</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Jackelyn</td>
                                    <td>Weible</td>
                                    <td>
                                        Airline Transport Pilot
                                    </td>
                                    <td>3 Oct 1981</td>
                                    <td>
                                        <span class="label label-default">Inactive</span>
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
                                                            <i class="icon-file-pdf"></i> Export to .pdf</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="icon-file-excel"></i> Export to .csv</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="icon-file-word"></i> Export to .doc</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Aura</td>
                                    <td>Hard</td>
                                    <td>Business Services Sales Representative</td>
                                    <td>19 Apr 1969</td>
                                    <td>
                                        <span class="label label-danger">Suspended</span>
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
                                                            <i class="icon-file-pdf"></i> Export to .pdf</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="icon-file-excel"></i> Export to .csv</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="icon-file-word"></i> Export to .doc</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nathalie</td>
                                    <td>
                                        Pretty
                                    </td>
                                    <td>Drywall Stripper</td>
                                    <td>13 Dec 1977</td>
                                    <td>
                                        <span class="label label-info">Pending</span>
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
                                                            <i class="icon-file-pdf"></i> Export to .pdf</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="icon-file-excel"></i> Export to .csv</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i class="icon-file-word"></i> Export to .doc</a>
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