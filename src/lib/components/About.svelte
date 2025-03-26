<script>
	import content from '$lib/content.json';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { screen } from '$lib/store/useScreen.js';

	let sectionTitleProps = {
		title: content.header.nav[1].name,
		color: 'var(--color-text-white)',
		backgroundColor: 'var(--color-backgroundSecondary)'
	};
</script>

<section id="about" class="about-section">
	<SectionTitle {sectionTitleProps}/>
	<article class="about-article">
		<h1 class="about-title ">{content.about.title}</h1>
		<ul class="about-list">
			{#each content.about.aboutList as item}
				<li class="about-list-item text-nunito">
					<span>{@html item.content}</span>
				</li>
			{/each}
		</ul>
	</article>
	{#if $screen.isDesktop || $screen.isTablet}
	<figure class="about-image-wrapper">
		<img class="about-image" src={content.about.image.src} alt={content.about.image.alt} />
	</figure>
		{/if}
</section>

<style lang="scss">
	@use '$lib/styles/_mixins' as *;

	.about-section {
    background: url('/img/about-img.webp') center/cover no-repeat;
		margin-top: 40px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 1rem;
		width: 100%;
		aspect-ratio: 1/1.5;
		padding: 1rem;
		position: relative;
	}

	.about-article {
    filter: drop-shadow(0 0 2px var(--color-secondary));
	}

	.about-title {
		font-size: 2rem;
		color: var(--color-text-white);
		font-family: var(--font-subtitle);
		font-weight: 500;
		letter-spacing: 2px;
	}

	.about-list-item {
		font-weight: 300;
		text-align: left;
		margin: 10px 0 0 0;
		color: var(--color-text-white);

		span {
			font-size: 15px;
		}
	}

	.about-list-item {
		display: flex;
	}

	.about-image-wrapper {
		width: 100%;
		position: relative;
		display: inline-block;
	}

	.about-image {
		display: block;
		width: 100%;
		object-fit: contain;
	}


	@include media(tablet) {
		.about-section {
      background: transparent;
			padding: 90px 50px 70px 70px;
			flex-direction: row;
			justify-content: space-between;
      aspect-ratio: auto;
		}

    .about-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100vw;
      height: 100%;
      background: var(--background-about);
      z-index: -1;
    }

    .about-article {
			max-width: 500px;
      filter: none;
    }

    .about-title {
			font-weight: 600;
      color: var(--color-text);
			font-size: 40px;
		}

		.about-list-item {
			margin-top: 30px;
			color: var(--color-text);
			text-align: justify;
			white-space: pre-wrap;
			span {
				font-size: var(--font-size-lg);
			}
		}

		.about-image-wrapper {
			max-width: 330px;
		}
	}
</style>
