<template>
    <div>
        <!-- Second navbar -->
	<div class="navbar navbar-default" id="navbar-second">
		<ul class="nav navbar-nav no-border visible-xs-block">
			<li><a class="text-center collapsed" data-toggle="collapse" data-target="#navbar-second-toggle"><i class="icon-menu7"></i></a></li>
		</ul>

		<div class="navbar-collapse collapse" id="navbar-second-toggle">
			<ul class="nav navbar-nav navbar-nav-material">
				<li><nuxt-link :to="'/dashboard'"><i class="icon-display4 position-left"></i> Dashboard</nuxt-link></li>

				<li class="dropdown mega-menu mega-menu-wide">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-cog5 position-left"></i> Aplikasi <span class="caret"></span></a>

					<div class="dropdown-menu dropdown-content">
						<div class="dropdown-content-body">
							<div class="row">
								<div class="col-md-3">
									<span class="menu-heading underlined">Management</span>
									<ul class="menu-list">
										<li>
											<a href="#"><i class="icon-users"></i> Terapists</a>
										</li>
										<li>
											<nuxt-link :to="'/customers'"><i class="icon-users"></i> Customers</nuxt-link>
										</li>
									</ul>
								</div>
								<div class="col-md-3">
									<span class="menu-heading underlined">Terapist</span>
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
						<i class="icon-cog5 position-left"></i> Aplikas <span class="caret"></span>
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
				<li class="dropdown dropdown-user">
					<a class="dropdown-toggle" data-toggle="dropdown">
						<img src="/images/placeholder.jpg" alt="">
						<span>Admin</span>
						<i class="caret"></i>
					</a>

					<ul class="dropdown-menu dropdown-menu-right">
						<li><a href="#"><i class="icon-user-plus"></i> My profile</a></li>
						<li class="divider"></li>
						<li><a href="#"><i class="icon-cog5"></i> Account settings</a></li>
						<li><nuxt-link :to="'/'"><i class="icon-switch2"></i> Logout</nuxt-link></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
	<!-- /second navbar -->
    </div>
</template>
