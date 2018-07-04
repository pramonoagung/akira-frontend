<template>
<div>
    <Navbar/>
    <!-- Page container -->
    <div class="page-container">

        <!-- Page content -->
        <div class="page-content">

            <!-- Main content -->
            <div class="content-wrapper">

                <!-- Basic datatable -->
                <div class="panel panel-flat">
                    <div class="panel-heading">
                        <h5 class="panel-title">Daftar Customer</h5>
                    </div>
                    <table class="table datatable-basic table-hover">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Alamat</th>
                                <th>Keanggotaan</th>
                                <th>Status</th>
                                <th class="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Marth</td>
                                <td>
                                    <a href="#">Enright</a>
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
                                    <a href="#">Airline Transport Pilot</a>
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
                                    <a href="#">Pretty</a>
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
import Navbar from "~/components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>
