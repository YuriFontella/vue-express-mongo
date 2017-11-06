<template>
	<header class="header">
		<div class="navigation-trigger hidden-xl-up" data-ma-action="aside-open" data-ma-target=".sidebar">
			<div class="navigation-trigger__inner">
				<i class="navigation-trigger__line"></i>
				<i class="navigation-trigger__line"></i>
				<i class="navigation-trigger__line"></i>
			</div>
		</div>

		<div class="header__logo hidden-sm-down">
			<h1>
				<router-link :to="{ name: 'index' }">Classificados</router-link>
			</h1>
		</div>

		<form class="search">
			<div class="search__inner">
				<input type="text" class="search__text" placeholder="Buscar por pessoas, arquivos ou documentos...">
				<i class="zmdi zmdi-search search__helper" data-ma-action="search-close"></i>
			</div>
		</form>

		<ul class="top-nav" v-if="user.online">
			<li class="hidden-xl-up">
				<a href="" data-ma-action="search-open">
					<i class="zmdi zmdi-search"></i>
				</a>
			</li>

			<li class="dropdown">
				<a href="" data-toggle="dropdown">
					<i class="zmdi zmdi-email"></i>
				</a>

			</li>

			<li class="dropdown hidden-xs-down">
				<a href="" data-toggle="dropdown">
					<i class="zmdi zmdi-apps"></i>
				</a>

				<div class="dropdown-menu dropdown-menu-right dropdown-menu--block" role="menu">
					<div class="row app-shortcuts">
						<a class="col-4 app-shortcuts__item" href="">
							<i class="zmdi zmdi-calendar bg-red"></i>
							<small class="">Empresa</small>
						</a>
						<a class="col-4 app-shortcuts__item" href="">
							<i class="zmdi zmdi-file-text bg-blue"></i>
							<small class="">Profissional</small>
						</a>
						<a class="col-4 app-shortcuts__item" href="">
							<i class="zmdi zmdi-email bg-teal"></i>
							<small class="">Mensagens</small>
						</a>
						<a class="col-4 app-shortcuts__item" href="">
							<i class="zmdi zmdi-trending-up bg-blue-grey"></i>
							<small class="">Configurações</small>
						</a>
						<a class="col-4 app-shortcuts__item" href="">
							<i class="zmdi zmdi-view-headline bg-orange"></i>
							<small class="">Registros</small>
						</a>
						<a class="col-4 app-shortcuts__item" href="">
							<i class="zmdi zmdi-image bg-light-green"></i>
							<small class="">Sair</small>
						</a>
					</div>
				</div>
			</li>

			<li class="dropdown top-nav__notifications">
				<a href="" data-toggle="dropdown" class="top-nav__notify">
					<i class="zmdi zmdi-notifications"></i>
				</a>

			</li>
		</ul>

		<ul class="top-nav" v-else>
			<li class="dropdown hidden-xs-down">
				<router-link :to="{ name: 'login' }">
					<i class="zmdi zmdi-sign-in"></i>
				</router-link>
			</li>
			<li class="dropdown hidden-xs-down">
				<router-link :to="{ name: 'signup' }">
					<i class="zmdi zmdi-accounts"></i>
				</router-link>
			</li>
		</ul>
	</header>
</template>

<script>
export default {
	name: 'navbar',
	props: ['user']
}
</script>
