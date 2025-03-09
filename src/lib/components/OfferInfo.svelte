<script>
	import content from '$lib/content.json';
</script>

<section class="offer-info">
	<div class="container">
		<h1 class="offer-info-title text-bebas">{content.offerInfo.description}</h1>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/_mixins' as *;

	.offer-info {
		margin-bottom: 40px;
	}

	.offer-info-title {
		font-size: var(--font-size-small);
		letter-spacing: 1px;
		font-weight: 100;
		text-align: center;
	}

	@include media(tablet) {
		.offer-info-title {
			font-size: var(--font-size-xl);
			letter-spacing: 2px;
		}
	}
</style>
