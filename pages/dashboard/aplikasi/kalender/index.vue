<template>
	<div class="page-container">
		<div class="page-content">			
			<div class="content-wrapper">

				<!-- Agenda view -->
				<div class="panel panel-flat">
					<div class="panel-heading">
						<h5 class="panel-title">Agenda</h5>
					</div>

					<div class="panel-body">
						<p class="content-group">Agenda terapis dalam satu bulan</p>

						<div class="fullcalendar-agenda"></div>
					</div>
				</div>
				<!-- agenda view -->

			</div>
			<!-- /main content -->

		</div>
		<!-- /page content -->

	</div>
	<!-- /page container -->
	
</template>
<script>
export default {
  layout: "dashboard",
  head() {
    return {
      script: [
        {
          type: "text/javascript",
          src: "/js/pages/extra_fullcalendar.js"
        },
        { type: "text/javascript", src: "/js/plugins/ui/moment/moment.min.js" },
        {
          type: "text/javascript",
          src: "/js/plugins/ui/fullcalendar/fullcalendar.min.js"
        }
      ]
    };
  }
};
</script>
