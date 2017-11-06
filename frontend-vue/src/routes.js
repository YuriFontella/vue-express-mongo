import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './components/Index.vue'
import Professionals from './components/Professionals.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{
			path: '/login',
			component: () => import('@/layouts/Login.vue'),
			name: 'login',
			meta: { forVisitors: true, layout: 'login' }
		},
		{
			path: '/signup',
			component: () => import('@/layouts/Signup.vue'),
			name: 'signup',
			meta: { forVisitors: true, layout: 'signup' }
		},
		{
			path: '/',
			component: Index,
			name: 'index'
		},		
		{
			path: '/professionals',
			component: Professionals,
			name: 'professionals'
		},
		{ path: '*', redirect: '/' }
	],

  linkActiveClass: 'active',
  mode: 'history'
})

router.beforeEach(
	(to, from, next) => {
		if (to.matched.some(record => record.meta.forVisitors)) {
			if (Vue.auth.isAuthenticated()) {
				next({
					path: '/'
				})
			} else next()
		} 

		else if (to.matched.some(record => record.meta.forAuth)) {
			if (!Vue.auth.isAuthenticated()) {
				next({
					path: '/login'
				})
			} else next()
		}

		else next()
	}
)

export default router
