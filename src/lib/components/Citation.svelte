<script>
	import content from '$lib/content.json';
	import Divider from './Divider.svelte';
</script>

<section class="citation-section">
	<Divider />
	<article class="citation-article">
		<div class="citation-image-wrapper">
			<img src={content.citation.img.src} alt={content.citation.img.alt} class="citation-image" />
		</div>
		<p class="citation-content">{content.citation.content}</p>
	</article>
</section>

<style lang="scss">
	@use '$lib/styles/_mixins' as *;

	.citation-section {
		margin: 60px 0;
	}

	.citation-article {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
		margin: 40px 0 0 0;
	}

	.citation-image-wrapper {
		max-width: 400px;
	}

	.citation-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.citation-content {
		text-align: center;
		font-family: var(--font-darker-grotesque), sans-serif;
		font-size: var(--font-size-xl);
		font-weight: 200;
		letter-spacing: 2px;
	}

	@include media(tablet) {
		.citation-article {
			flex-direction: row;
			gap: 30px;
			margin: 80px 0 80px 0;
		}

		.citation-image-wrapper {
			flex-shrink: 0;
			max-width: 350px;
		}

		.citation-content {
			font-size: var(--font-size-xxxl);
			padding: 0 20px 0 0;
		}
	}
</style>
