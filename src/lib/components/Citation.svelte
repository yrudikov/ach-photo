<script>
	import content from '$lib/content.json';
</script>

<section class="citation-section">
	<article class="citation-article">
		<div class="citation-image-wrapper">
			<img src={content.citation.img.src} alt={content.citation.img.alt} class="citation-image" />
		</div>
		<p class="citation-content">{@html content.citation.content}</p>
	</article>
</section>

<style lang="scss">
	@use '$lib/styles/_mixins' as *;

	.citation-section {
		background-color: var(--background-medium-brown);
		padding: 40px 0;
	}

	.citation-article {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
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
		font-family: var(--font-body);
		font-size: 28px;
		color: var(--color-text-white);
		font-weight: 300;
		letter-spacing: 2px;
	}

	@include media(tablet) {
		.citation-section {
			padding: 80px 40px;
		}
		.citation-article {
			flex-direction: row;
			gap: 60px;
		}

		.citation-image-wrapper {
			flex-shrink: 0;
			max-width: 500px;
			width: 100%;
		}

		.citation-content {
			font-size: 64px;
			text-align: left;
      letter-spacing: 4px;
			line-height: 1.2;
		}
	}
</style>
