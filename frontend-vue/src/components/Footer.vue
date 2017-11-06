<template>
	<section class="content p-0">
		<footer class="footer hidden-xs-down">
			<p>© Classificados by Yuri Fontella. Todos os direitos reservados.</p>

			<ul class="nav footer__nav">
				<router-link class="nav-link" :to="{ name: 'index' }">Página Inicial</router-link>
				<router-link class="nav-link" :to="{ name: 'signup' }">Criar uma conta</router-link>
				<router-link class="nav-link" :to="{ name: 'login' }">Fazer o Login</router-link>
				<router-link class="nav-link" :to="{ name: 'index' }">Termos</router-link>
				<router-link class="nav-link" :to="{ name: 'index' }">Privacidade</router-link>
			</ul>
		</footer>
	</section>
</template>

<script>
	export default {
		name: 'footer'
	}
</script>