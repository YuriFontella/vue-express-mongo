<template>
	<div>
		<section class="login">
			<div class="login__block active">
				<div class="login__block__header palette-Blue bg">
					<i class="zmdi zmdi-account-circle"></i>
					Criar uma conta

					<div class="actions actions--inverse login__block__actions">
						<div class="dropdown">
							<i data-toggle="dropdown" class="zmdi zmdi-more-vert actions__item"></i>

							<div class="dropdown-menu dropdown-menu-right">
								<router-link class="dropdown-item" :to="{ name: 'login' }">Já tem uma conta?</router-link>
								<a class="dropdown-item">Esqueceu sua senha?</a>
							</div>
						</div>
					</div>
				</div>

				<form class="login__block__body" @submit.prevent="signup($event)" novalidate>
					<div class="form-group form-group--float form-group--centered" v-form-control-active>
						<input type="text" class="form-control" name="name" v-model="user.name" v-validate="'required'" autofocus>
						<label>Nome</label>
						<i class="form-group__bar"></i>
					</div>

					<div class="form-group form-group--float form-group--centered" v-form-control-active>
						<input type="text" class="form-control" name="email" v-model="user.email" v-validate="'required|email'">
						<label>E-mail</label>
						<i class="form-group__bar"></i>
					</div>

					<div class="form-group form-group--float form-group--centered" v-form-control-active>
						<input type="password" class="form-control" name="password" v-model="user.password" v-validate="'required'">
						<label>Senha</label>
						<i class="form-group__bar"></i>
					</div>

					<div class="form-group">
						<label class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" name="terms" v-model="user.terms" v-validate="'required'">
							<span class="custom-control-indicator"></span>
							<span class="custom-control-description">Aceitar o contrato de licença</span>
						</label>
					</div>

					<button class="btn btn--icon login__block__btn" :class="{ disabled: submitted }">
						<i class="zmdi zmdi-plus"></i>
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
	name: 'signup',

	components: {
		'app-footer': Footer
	},

	data() {
		return {
			user: {
				name: null,
				email: null,
				password: null,
				terms: null
			},
			submitted: false,
			title: 'Signup'
		}
	},

	methods: {
		signup() {
			this.submitted = true
			this.$validator.validateAll().then((result) => {
				if (result) {
					this.$http.post('users/signup', this.user).then(response => {
						if (response.body.status) {
							swal('Feito!', response.body.message, 'success'),
								this.reset()
						} else {
							swal('Ops!', response.body.message, 'error')
						}
					})
				} else {
					$.notifyClose()
					$.notify({
						// options
						message: 'Todos os campos devem ser preenchidos!'
					},{
						// settings
						type: 'danger',
						allow_dismiss: false,
						newest_on_top: true,
						animate: {
							enter: 'animated fadeIn',
							exit: 'animated fadeOut'
						}						
					});

				}

				this.submitted = false
			})
		},

		reset() {
			this.user.name = null
			this.user.email = null
			this.user.password = null
			this.user.terms = false
		}
	},
	
	head: {
		title () {
			return {
				inner: this.title
			}
		}
	},

	destroyed () {
		$.notifyClose()
	}
}
</script>
