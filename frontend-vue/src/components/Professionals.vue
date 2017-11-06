<template>
	<div>
		Hello professionals
	</div>
</template>

<script>
export default {
	data () {
		return {
			title: 'Professionals'
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
