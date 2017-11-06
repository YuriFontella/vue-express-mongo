<template>
	<div>
		<section class="login">

			<!-- Login -->
			<div class="login__block active">
				<div class="login__block__header">
					<i class="zmdi zmdi-account-circle"></i>
					Olá! Por favor, faça o login.

					<div class="actions actions--inverse login__block__actions">
						<div class="dropdown">
							<i data-toggle="dropdown" class="zmdi zmdi-more-vert actions__item"></i>

							<div class="dropdown-menu dropdown-menu-right">
								<router-link class="dropdown-item" :to="{ name: 'signup' }">Criar uma conta</router-link>
								<a class="dropdown-item">Esqueceu sua senha?</a>
							</div>
						</div>
					</div>
				</div>

				<form class="login__block__body" @submit.prevent="login">
					<div class="form-group form-group--float form-group--centered" v-form-control-active>
						<input type="text" class="form-control" v-model="user.email" autofocus>
						<label>Seu e-mail</label>
						<i class="form-group__bar"></i>
					</div>

					<div class="form-group form-group--float form-group--centered" v-form-control-active>
						<input type="password" class="form-control" v-model="user.password">
						<label>Sua senha</label>
						<i class="form-group__bar"></i>
					</div>

					<button type="submit" class="btn btn--icon login__block__btn" :class="{ disabled: submitted }">
						<i class="zmdi zmdi-long-arrow-right"></i>
					</button>
				</form>
			</div>
		</section>

		<app-footer></app-footer>
	</div>
</template>
<script>
import Footer from '../components/Footer.vue'

export default {
	name: 'login',

	components: {
		'app-footer': Footer
	},

	data() {
		return {
			user: {
				email: null,
				password: null
			},
			submitted: false,
			title: 'Login'
		}
	},

	methods: {
		login() {
			this.submitted = true
			this.$http.post('users/login', this.user).then(response => {
				if (response.body.status) {

					this.$auth.setToken(response.body.token)
					this.$store.dispatch('loginSuccess', response.body.data)

					this.$router.push('/')

				} else {

					swal('Ops!', response.body.message, 'error')
				}

				this.submitted = false
			})
		}
	},

	head: {
		title () {
			return {
				inner: this.title
			}
		}
	}
}
</script>
