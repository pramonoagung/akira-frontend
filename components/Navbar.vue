<template>
    <div>
        <!-- Second navbar -->
	<div class="navbar navbar-default" id="navbar-second">
		<ul class="nav navbar-nav no-border visible-xs-block">
			<li><a class="text-center collapsed" data-toggle="collapse" data-target="#navbar-second-toggle"><i class="icon-menu7"></i></a></li>
		</ul>

		<div class="navbar-collapse collapse" id="navbar-second-toggle">
			<ul class="nav navbar-nav navbar-nav-material">
				<li><a href="index.html"><i class="icon-display4 position-left"></i> Dashboard</a></li>

				<li class="dropdown mega-menu mega-menu-wide">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-puzzle4 position-left"></i> Components <span class="caret"></span></a>

					<div class="dropdown-menu dropdown-content">
						<div class="dropdown-content-body">
							<div class="row">
								<div class="col-md-3">
									<span class="menu-heading underlined">Forms</span>
									<ul class="menu-list">
										<li>
											<a href="#"><i class="icon-file-css"></i> JSON forms</a>
											<ul>
												<li><a href="alpaca_basic.html">Basic inputs</a></li>
												<li><a href="alpaca_advanced.html">Advanced inputs</a></li>
												<li><a href="alpaca_controls.html">Controls</a></li>
											</ul>
										</li>
									</ul>
								</div>
								<div class="col-md-3">
									<span class="menu-heading underlined">Appearance</span>
									<ul class="menu-list">
										<li>
											<a href="#"><i class="icon-browser"></i> Content panels</a>
											<ul>
												<li><a href="panels.html">Panels</a></li>
												<li><a href="panels_heading.html">Heading elements</a></li>
												<li><a href="panels_footer.html">Footer elements</a></li>
												<li><a href="panels_draggable.html">Draggable panels</a></li>
											</ul>
										</li>
									</ul>
								</div>
								<div class="col-md-3">
									<span class="menu-heading underlined">Extensions</span>
									<ul class="menu-list">
										<li>
											<a href="#"><i class="icon-puzzle4"></i> Extensions</a>
											<ul>
												<li><a href="extension_image_cropper.html">Image cropper</a></li>
												<li><a href="extension_blockui.html">Block UI</a></li>
												<li><a href="extension_dnd.html">Drag and drop</a></li>
											</ul>
										</li>
									</ul>
								</div>
								<div class="col-md-3">
									<span class="menu-heading underlined">Tables</span>
									<ul class="menu-list">
										<li>
											<a href="#"><i class="icon-versions"></i> Responsive options</a>
											<ul>
												<li><a href="table_responsive.html">Responsive basic tables</a></li>
												<li><a href="datatable_responsive.html">Responsive data tables</a></li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</li>

				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">
						<i class="icon-strategy position-left"></i> Starter kit <span class="caret"></span>
					</a>

					<ul class="dropdown-menu width-200">
						<li class="dropdown-header">Basic layouts</li>
						<li class="dropdown-submenu">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-grid2"></i> Columns</a>
							<ul class="dropdown-menu">
								<li class="dropdown-header highlight">Options</li>
								<li><a href="starters/1_col.html">One column</a></li>
								<li><a href="starters/2_col.html">Two columns</a></li>
								<li class="dropdown-submenu">
									<a href="#">Three columns</a>
									<ul class="dropdown-menu">
										<li class="dropdown-header highlight">Sidebar position</li>
										<li><a href="starters/3_col_dual.html">Dual sidebars</a></li>
										<li><a href="starters/3_col_double.html">Double sidebars</a></li>
									</ul>
								</li>
								<li><a href="starters/4_col.html">Four columns</a></li>
							</ul>
						</li>
						<li class="dropdown-submenu">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-paragraph-justify3"></i> Navbars</a>
							<ul class="dropdown-menu">
								<li class="dropdown-header highlight">Fixed navbars</li>
								<li><a href="starters/layout_navbar_fixed_main.html">Fixed main navbar</a></li>
								<li><a href="starters/layout_navbar_fixed_secondary.html">Fixed secondary navbar</a></li>
								<li><a href="starters/layout_navbar_fixed_both.html">Both navbars fixed</a></li>
							</ul>
						</li>
						<li class="dropdown-header">Optional layouts</li>
						<li><a href="starters/layout_boxed.html"><i class="icon-align-center-horizontal"></i> Fixed width</a></li>
						<li><a href="starters/layout_sidebar_sticky.html"><i class="icon-flip-vertical3"></i> Sticky sidebar</a></li>
					</ul>
				</li>
			</ul>
            <ul class="nav navbar-nav navbar-nav-material navbar-right">
				<li>
					<a href="changelog.html">
						<i class="icon-history position-left"></i>
						Changelog
						<span class="label label-inline position-right bg-success-400">1.5</span>
					</a>
				</li>

				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">
						<i class="icon-cog3"></i>
						<span class="visible-xs-inline-block position-right">Share</span>
						<span class="caret"></span>
					</a>

					<ul class="dropdown-menu dropdown-menu-right">
						<li><a href="#"><i class="icon-user-lock"></i> Account security</a></li>
						<li><a href="#"><i class="icon-statistics"></i> Analytics</a></li>
						<li><a href="#"><i class="icon-accessibility"></i> Accessibility</a></li>
						<li class="divider"></li>
						<li><a href="#"><i class="icon-gear"></i> All settings</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
	<!-- /second navbar -->
    </div>
</template>
