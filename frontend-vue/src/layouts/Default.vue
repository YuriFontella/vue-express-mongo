<template>
  <div>
    <app-navbar :user="user"></app-navbar>
    <app-aside :user="user"></app-aside>

    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Navbar from '../components/Navbar.vue'
import Aside from '../components/Aside.vue'

export default {
  name: 'default',

	created () {
		if (this.$auth.isAuthenticated()) {
			this.$store.dispatch('setUserData')
		}
	
		this.$store.dispatch('setUserOnline')
	},
	
	computed: {
		...mapState({
			user: state => state.user
		})
  },

  components: {
    'app-navbar': Navbar,
    'app-aside': Aside
  }
}
</script>

<style>

</style>