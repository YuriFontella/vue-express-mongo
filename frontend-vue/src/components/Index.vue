<template>
	<div>
		<section class="content">
			<div class="row quick-stats">
				<div class="col-sm-6 col-md-3">
					<div class="quick-stats__item bg-light-blue">
						<div class="quick-stats__info">
							<h2>987,459</h2>
							<small>Total de Usuários</small>
						</div>

						<div class="quick-stats__chart" v-sparkline>6,4,8,6,5,6,7,8,3,5,9,5</div>
					</div>
				</div>

				<div class="col-sm-6 col-md-3">
					<div class="quick-stats__item bg-amber">
						<div class="quick-stats__info">
							<h2>356,785</h2>
							<small>Total de Empresas</small>
						</div>

						<div class="quick-stats__chart" v-sparkline>4,7,6,2,5,3,8,6,6,4,8,6</div>
					</div>
				</div>

				<div class="col-sm-6 col-md-3">
					<div class="quick-stats__item bg-purple">
						<div class="quick-stats__info">
							<h2>58,778</h2>
							<small>Total de Profissionais</small>
						</div>

						<div class="quick-stats__chart" v-sparkline>9,4,6,5,6,4,5,7,9,3,6,5</div>
					</div>
				</div>

				<div class="col-sm-6 col-md-3">
					<div class="quick-stats__item bg-red">
						<div class="quick-stats__info">
							<h2>214</h2>
							<small>Total de Atendimentos</small>
						</div>

						<div class="quick-stats__chart" v-sparkline>5,6,3,9,7,5,4,6,5,6,4,9</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-8">
					<div class="card-columns">
						<div class="card">
							<img class="card-img-top" src="src/assets/img/enterprises/6.png">

							<div class="card-header">
								<h2 class="card-title">Supermercado Kochi</h2>
								<small class="card-subtitle">Um sempre perto de você</small>
							</div>

							<div class="card-block">
								<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>
							</div>
						</div>

						<div class="card">
							<img class="card-img-top" src="src/assets/img/enterprises/8.png">

							<div class="card-header">
								<h2 class="card-title">Mecânica de Rodas</h2>
								<small class="card-subtitle">Venha conhecer nossa empresa autorizada por todas as marcas</small>
							</div>

							<div class="card-block">
								<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>
							</div>
						</div>

						<div class="card">
							<img class="card-img-top" src="src/assets/img/enterprises/10.png">

							<div class="card-header">
								<h2 class="card-title">Print House</h2>
								<small class="card-subtitle">Todos os tipos de peças de informática e materiais escolares</small>
							</div>

							<div class="card-block">
								<p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>
							</div>
						</div>												
					</div>
				</div>

				<div class="col-md-4">
					<div class="card">
						<div class="card-header">
							<h2 class="card-title">Categorias</h2>
							<small class="card-subtitle">Principais funções de profissionais</small>
						</div>

						<div class="card-block">
							<div class="todo__labels">
								<a href="">#Messages</a>
								<a href="">#Clients</a>
								<a href="">#Server</a>
								<a href="">#Marketing</a>
								<a href="">#Work related</a>
								<a href="">#Website</a>
								<a href="">#Uncategorized</a>
								<a href="">#Collegues</a>
								<a href="">#Hosting</a>
								<a href="">#Design</a>
								<a href="">#To be addressed</a>
								<a href="">#Others</a>
							</div>
						</div>

						<div class="card-footer card-footer--highlight">
							<div class="form-group">
								<input type="text" class="form-control" placeholder="Buscar uma categoria">
								<i class="form-group__bar"></i>
							</div>

							<a href="" class="btn btn-primary">Buscar</a>
						</div>
					</div>

					<div class="card">
						<div class="card-header">
							<h2 class="card-title">Profissionais Recentes</h2>
							<small class="card-subtitle">Veja o perfil dos mais recentes cadastrados</small>
						</div>

						<div class="listview listview--hover">
							<a class="listview__item">
								<img src="src/assets/img/users/1.jpg" class="listview__img" alt="">

								<div class="listview__content">
									<div class="listview__heading">Jeannette Lawson</div>
									<p>Donec congue tempus ligula, varius hendrerit mi hendrerit sit amet. Duis ac quam sit amet leo feugiat iaculis</p>
								</div>
							</a>

							<a class="listview__item">
								<img src="src/assets/img/users/2.jpg" class="listview__img" alt="">

								<div class="listview__content">
									<div class="listview__heading">David Villa Jacobs</div>
									<p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis lobortis sapien non posuere</p>
								</div>
							</a>

							<a class="listview__item">
								<img src="src/assets/img/users/3.jpg" class="listview__img" alt="">

								<div class="listview__content">
									<div class="listview__heading">Candice Barnes</div>
									<p>Quisque non tortor ultricies, posuere elit id, lacinia purus curabitur</p>
								</div>
							</a>

							<a class="listview__item">
								<img src="src/assets/img/users/4.jpg" class="listview__img" alt="">

								<div class="listview__content">
									<div class="listview__heading">Darla Mckinney</div>
									<p>Duis tincidunt augue nec sem dignissim scelerisque. Vestibulum rhoncus sapien sed nulla aliquam lacinia</p>
								</div>
							</a>

							<a class="listview__item">
								<img src="src/assets/img/users/5.jpg" class="listview__img" alt="">

								<div class="listview__content">
									<div class="listview__heading">Rudolph Perez</div>
									<p>Phasellus a ullamcorper lectus, sit amet viverra quam. In luctus tortor vel nulla pharetra bibendum</p>
								</div>
							</a>

							<a href="" class="view-more">Ver todos os Profissionais</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: 'index',

	data() {
		return {
			title: 'Página Inicial'
		}
	},

	directives: {
		sparkline: {
			inserted(el, binding, vnode) {
				$(el).sparkline('html', {
					type: 'bar',
					height: 36,
					barWidth: 3,
					barColor: '#fff',
					barSpacing: 2
				})
			}
		}
	},

	head: {
		title() {
			return {
				inner: this.title
			}
		}
	}
}
</script>

<style scoped>
	.card-columns {
		column-count: 2 !important;
	}
</style>
