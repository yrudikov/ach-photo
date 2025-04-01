<script>
	import content from '$lib/content.json';
	import Icon from '@iconify/svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import PortfolioCarousel from '$lib/components/PortfolioCarousel.svelte';

	let sectionTitleProps = {
		title: content.header.nav[3].name,
		color: 'var(--background-light-brown)',
		backgroundColor: 'var(--background-medium-brown)'
	};
</script>

<section id="experience" class="experience-section">
	<SectionTitle {sectionTitleProps} />
	<article class="experience-container text-nunito">
		{#each content.portfolio.content as item}
			<div class="experience-item-wrapper">
				<Icon icon="mdi:check" class="experience-title-icon" />
				<div class="experience-item-container">
					<h2 class="experience-item-title">{item.title}</h2>

					<ul class="experience-list">
						{#each item.description as text}
							<li class="experience-list-item">
								<span>{text.text}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</article>
	<PortfolioCarousel />
</section>

<style lang="scss">
	@use '$lib/styles/_mixins' as *;
	.experience-section {
		margin: 0;
		padding: 60px 0 20px;
		position: relative;
		background-color: var(--background-light-brown);
		color: var(--color-textSecondary);
	}

	.experience-container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 20px 60px;
		margin: 30px auto;
		padding: 0 12px;
	}
	.experience-item-wrapper {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 5px;
	}

	.experience-item-container {
		display: flex;
		flex-direction: column;
	}

	.experience-item-title {
		font-size: var(--font-size-medium);
		margin: 0;
	}

	.experience-item-wrapper :global(svg) {
		font-size: 20px;
		flex-shrink: 0;
		margin-top: 1px;
	}

	.experience-list {
    list-style: none;
	}

	.experience-list-item {

		font-size: var(--font-size-base);
		font-weight: 100;
	}

	@include media(tablet) {

		.experience-container {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto auto auto;
			grid-auto-rows: min-content;
			padding: 0 50px;
			grid-auto-flow: column;
			align-items: start;
		}

		.experience-item-wrapper {
			height: auto;
			align-self: start;
		}
    .experience-item-wrapper:last-child {
      align-self: end;
    }

		.experience-item-wrapper :global(svg) {
			font-size: 40px;
		}
		.experience-item-container {
			letter-spacing: 1px;
		}

		.experience-item-title {
			margin-top: 5px;
			font-size: var(--font-size-lg);
		}

		.experience-list-item {
			font-size: var(--font-size-medium);
			font-weight: 500;
			white-space: pre-line;
		}
	}
</style>
