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

				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">
						<i class="icon-cog5 position-left"></i> Aplikas <span class="caret"></span>
					</a>

					<ul class="dropdown-menu width-200">
						<li class="dropdown-submenu">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-paragraph-justify3"></i> Terapist</a>
							<ul class="dropdown-menu">
								<li><nuxt-link to="/dashboard/aplikasi/terapists/histories">Histories</nuxt-link></li>
								<li><nuxt-link to="/dashboard/aplikasi/terapists/rating">Rating</nuxt-link></li>
								<li><nuxt-link to="/dashboard/aplikasi/terapists/komisi">Komisi</nuxt-link></li>
								<li><nuxt-link to="/dashboard/aplikasi/terapists/management">Management</nuxt-link></li>
							</ul>
						</li>
						<li class="dropdown">
							<nuxt-link to="/customers"><i class="icon-users"></i> Customer</nuxt-link>
						</li>
						<li><nuxt-link to="/"><i class="icon-align-center-horizontal"></i> Administrasi</nuxt-link></li>
						<li><nuxt-link to="/"><i class="icon-cog5"></i> Laporan</nuxt-link></li>
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
