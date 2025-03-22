<script>
	import content from '$lib/content.json';
	import Divider from '$lib/components/Divider.svelte';
	import Icon from '@iconify/svelte';
</script>

<section id="experience" class="experience-section">
	<h1 class="section-title text-monserrat">{content.experience.title}</h1>
	<Divider />
	<article class="experience-container text-monserrat">
		{#each content.experience.content as item}
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
</section>

<style lang="scss">
	@use '$lib/styles/_mixins' as *;
	.experience-section {
		margin: 20px 0 0 0;
	}

	.experience-container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 20px 10px;
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
		font-size: var(--font-size-base);
		margin: 0;
	}

	.experience-item-wrapper :global(svg) {
		font-size: 20px;
		flex-shrink: 0;
		margin-top: 1px;
		color: var(--color-text);
	}

	.experience-list {
		padding-left: 1rem;
	}

	.experience-list-item {
		font-size: var(--font-size-small);
		font-weight: 100;
	}

	@include media(tablet) {
		.experience-section {
			margin: 40px 0 0 0;
		}

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

		.experience-item-wrapper :global(svg) {
			font-size: 40px;
			color: var(--color-text);
		}
		.experience-item-container {
			letter-spacing: 1px;
		}

		.experience-list {
			padding-left: 1.5rem;
		}

		.experience-item-title {
			margin-top: 5px;
			font-size: var(--font-size-medium);
		}

		.experience-list-item {
			font-size: var(--font-size-base);
			white-space: pre-line;
		}
	}
</style>
