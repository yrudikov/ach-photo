<script>
	import content from '$lib/content.json';
	import Icon from '@iconify/svelte';
</script>

<section id="about" class="about-section">
	<article class="about-article">
		<h2 class="about-title text-serif-display">{content.about.title}</h2>
		<ul class="about-list">
			{#each content.about.aboutList as item}
				<li class="about-list-item text-bebas">
					<Icon icon="mdi:label" class="list-icon" />
					<span>{item.content}</span>
				</li>
			{/each}
		</ul>
	</article>
	<figure class="about-image-wrapper">
		<img class="about-image" src={content.about.image.src} alt={content.about.image.alt} />
	</figure>
</section>

<style lang="scss">
	@use '$lib/styles/_mixins' as *;

	.about-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.about-title {
		font-size: 2rem;
		color: white;
		font-weight: 300;
	}

	.about-list-item {
		font-weight: 300;
		text-align: left;
		margin: 10px 0 0 0;

		span {
			font-size: var(--font-size-small);
		}
	}

	.about-list-item {
		display: flex;
		text-transform: uppercase;
		gap: 0.5rem;
	}

	.about-list-item :global(svg) {
		font-size: 1rem;
		flex-shrink: 0;
		margin-top: 3px;
		color: var(--color-text);
	}

	.about-image-wrapper {
		width: 100%;
		position: relative;
		display: inline-block;
	}

	.about-image {
		display: block;
		width: 100%;
		object-fit: cover;
		object-position: top;
	}

	.about-image-wrapper::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: inset 0 0 10px 10px rgba(19, 18, 19, 100%);
		pointer-events: none;
	}

	@include media(tablet) {
		.about-section {
			padding: 0 30px 0 30px;
			flex-direction: row;
		}

		.about-title {
			font-size: 40px;
		}

		.about-list-item {
			span {
				font-size: var(--font-size-base);
			}
		}

		.about-image-wrapper {
			height: fit-content;
		}
	}
</style>
