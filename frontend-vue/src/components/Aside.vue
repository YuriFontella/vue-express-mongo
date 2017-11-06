<template>
	<aside class="sidebar">
		<div class="scrollbar-inner">
			<div class="user" v-if="user.online">
				<div class="user__info" data-toggle="dropdown">
					<img class="user__img" src="src/assets/img/users/1.jpg" alt="">
					<div>
						<div class="user__name">{{ user.data.name }}</div>
						<div class="user__email">{{ user.data.email }}</div>
					</div>
				</div>

				<div class="dropdown-menu">
					<a class="dropdown-item" href="">View Profile</a>
					<a class="dropdown-item" href="">Settings</a>
					<a class="dropdown-item" @click="logout">Logout</a>
				</div>
			</div>

			<ul class="navigation">
				<router-link tag="li" :to="{ name: 'index' }">
					<a>
						<i class="zmdi zmdi-home"></i> Página Inicial
					</a>
				</router-link>
				<li>
					<a>
						<i class="zmdi zmdi-format-underlined"></i> Empresas
					</a>
				</li>

				<router-link active-class="navigation__active" tag="li" :to="{ name: 'professionals' }">
					<a>
						<i class="zmdi zmdi-widgets"></i> Profissionais
					</a>
				</router-link>

				<li>
					<a>
						<i class="zmdi zmdi-calendar"></i> Usuários
					</a>
				</li>

				<li>
					<a>
						<i class="zmdi zmdi-image"></i> Mensagens
					</a>
				</li>

				<li>
					<a>
						<i class="zmdi zmdi-collection-item"></i> Notificações
					</a>
				</li>

				<li>
					<a>
						<i class="zmdi zmdi-trending-up"></i> Ofertas
					</a>
				</li>

				<li>
					<a>
						<i class="zmdi zmdi-calendar"></i> Notícias
					</a>
				</li>
			</ul>

		</div>
	</aside>
</template>

<script>
export default {
	name: 'aside',

	props: ['user'],
	methods: {
		logout() {
			localStorage.clear()

			this.$store.dispatch('clearStore')
			this.$router.push('/login')
		}
	}
}
</script>
