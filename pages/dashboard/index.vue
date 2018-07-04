<template>
    <div>
        <Navbar />
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
                                            <h3 class="no-margin">$18,390</h3>
                                            Today's revenue
                                        </div>

                                        <div id="today-revenue"></div>
                                    </div>
                                    <!-- /today's revenue -->
                                </div>
                                
                                <div class="col-lg-3">

                                    <!-- Today's revenue -->
                                    <div class="panel bg-blue-400">
                                        <div class="panel-body">
                                            <h3 class="no-margin">$18,390</h3>
                                            Today's revenue
                                        </div>

                                        <div id="today-revenue"></div>
                                    </div>
                                    <!-- /today's revenue -->
                                </div>

                            </div>
                            <!-- /quick stats boxes -->
                        </div>
                    </div>
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