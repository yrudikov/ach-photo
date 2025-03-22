<script>
	import '$lib/styles/global.scss';
	import '$lib/styles/_mixins.scss';
</script>

<slot />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>
