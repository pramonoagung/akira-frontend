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
						<i class="icon-cog5 position-left"></i> Aplikasi <span class="caret"></span>
					</a>

					<ul class="dropdown-menu width-200">
						<li class="dropdown-submenu">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-paragraph-justify3"></i> Terapis</a>
							<ul class="dropdown-menu">
								<li><nuxt-link to="/dashboard/aplikasi/terapis/workshift">Workshift</nuxt-link></li>
								<li><nuxt-link to="/dashboard/aplikasi/terapis/histori">Histori</nuxt-link></li>
								<li><nuxt-link to="/dashboard/aplikasi/terapis/rating">Rating</nuxt-link></li>
								<li><nuxt-link to="/dashboard/aplikasi/terapis/komisi">Komisi</nuxt-link></li>
							</ul>
						</li>
						<li class="dropdown-submenu">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-cogs"></i> Manajemen</a>
							<ul class="dropdown-menu">
								<li><nuxt-link to="/dashboard/aplikasi/manajemen/terapis">Terapis</nuxt-link></li>
								<li><nuxt-link to="/dashboard/aplikasi/manajemen/produk">Produk</nuxt-link></li>
								<li><nuxt-link to="/dashboard/aplikasi/manajemen/voucher">Voucher</nuxt-link></li>
								<li><nuxt-link to="/dashboard/aplikasi/manajemen/admin">Admin</nuxt-link></li>
							</ul>
						</li>
						<li class="dropdown">
							<nuxt-link to="/dashboard/aplikasi/kalender"><i class="icon-calendar22"></i> Kalender</nuxt-link>
						</li>
						<li class="dropdown">
							<nuxt-link to="/dashboard/aplikasi/pembayaran"><i class="icon-wallet"></i> Pembayaran</nuxt-link>
						</li>
						<li class="dropdown-submenu">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-clipboard2"></i> Laporan</a>
							<ul class="dropdown-menu">
								<li><nuxt-link to="/dashboard/aplikasi/laporan/transaksi"><i class="icon-cog5"></i> Transaksi</nuxt-link></li>
								<li><nuxt-link to="/dashboard/aplikasi/laporan/pelanggan"><i class="icon-users"></i> Pelanggan</nuxt-link></li>
							</ul>
						</li>
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
