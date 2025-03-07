<script>
	import content from '$lib/content.json';
	import Divider from './Divider.svelte';
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<section id="contact" class="focus-section">
	<h1 class="section-title text-monserrat">{content.focus.title}</h1>
	<Divider />
	<article class="focus-container text-monserrat">
		<div class="focus-items-container">
			<div class="focus-items-circle {mounted ? 'animate' : ''}">
				{#each content.focus.items as item, index}
					<div
						class="focus-item-wrapper"
						style="--item-index: {index}; --total-items: {content.focus.items.length};"
					>
						<div class="focus-item-content {mounted ? 'animate' : ''}">
							<div class="focus-item-img-wrapper {mounted ? 'animate' : ''}">
								<img src={item.src} alt={item.name} class="focus-item-img" />
							</div>
							<p class="focus-item-name {mounted ? 'animate' : ''}">{item.name}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="focus-bottom-image {mounted ? 'animate' : ''}">
			<img src={content.focus.image.src} alt={content.focus.image.alt} />
			<p class="focus-bottom-image-text">{content.focus.image.alt}</p>
		</div>
	</article>
</section>

<style lang="scss">
	@use '$lib/styles/_mixins' as *;

	/* Mobile First Styles */
	.focus-section {
		position: relative;
		padding-bottom: 120px;
	}

	.focus-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 20px 0;
		position: relative;
		letter-spacing: 2px;
	}

	.focus-items-container {
		position: relative;
		width: 100%;
		height: 200px;
		margin: 0 auto;
		overflow: hidden;
	}

	.focus-items-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(
			circle at center,
			rgba(19, 18, 19, 0) 10%,
			rgba(19, 18, 19, 0.3) 70%,
			rgba(19, 18, 19, 1) 80%
		);
		pointer-events: none;
		z-index: 2;
	}

	.focus-items-circle {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 110%;
		left: 0;
		transition: transform 1s ease-in-out;
		opacity: 0;
		transform: scale(0.8);

		&.animate {
			animation: rotate 30s linear infinite;
			opacity: 1;
			transform: scale(1);
			transition:
				opacity 1s ease-out,
				transform 1s ease-out;
		}
	}

	.focus-item-wrapper {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100px;
		height: 100px;
		margin-left: -40px;
		margin-top: -40px;
		transform-origin: center;
		transform: rotate(calc(360deg / var(--total-items) * var(--item-index))) translate(230px)
			rotate(calc(-360deg / var(--total-items) * var(--item-index)));
	}

	.focus-item-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		transform-origin: center;
		opacity: 0;
		transform: scale(0.8);
		transition:
			opacity 0.5s ease-out,
			transform 0.5s ease-out;

		&.animate {
			animation: counter-rotate 30s linear infinite;
			opacity: 1;
			transform: scale(1);
			transition:
				opacity 0.5s ease-out,
				transform 0.5s ease-out;
			transition-delay: calc(0.1s * var(--item-index));
		}
	}

	.focus-item-img-wrapper {
		width: 100px;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 5px;
		opacity: 0;
		transform: translateY(10px);
		transition:
			opacity 0.5s ease-out,
			transform 0.5s ease-out;

		&.animate {
			opacity: 1;
			transform: translateY(0);
			transition-delay: calc(0.15s * var(--item-index));
		}
	}

	.focus-item-img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.focus-item-name {
		font-size: 9px;
		text-align: center;
		margin: 0;
		font-weight: bold;
		opacity: 0;
		transform: translateY(10px);
		transition:
			opacity 0.5s ease-out,
			transform 0.5s ease-out;

		&.animate {
			opacity: 1;
			transform: translateY(0);
			transition-delay: calc(0.2s * var(--item-index));
		}
	}

	.focus-bottom-image {
		position: relative;
		width: 250px;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.8s ease-out,
			transform 0.8s ease-out;

		&.animate {
			opacity: 1;
			transform: translateY(0);
			transition-delay: 0.5s;
		}
	}

	.focus-bottom-image-text {
		font-size: var(--font-size-small);
		font-weight: 100;
		text-align: center;
	}

	.focus-bottom-image img {
		width: 100%;
		height: auto;
		object-fit: contain;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes counter-rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(-360deg);
		}
	}

	@include media(tablet) {
		.focus-section {
			padding-bottom: 150px;
		}

		.focus-container {
			padding: 40px 0;
			letter-spacing: 4px;
		}

		.focus-items-container {
			max-width: 600px;
			height: 600px;
			overflow: visible;
		}

		.focus-items-circle {
			top: 0;
			left: -25%;
		}

		.focus-item-wrapper {
			width: 120px;
			height: 120px;
			margin-left: -60px;
			margin-top: -60px;
			transform: rotate(calc(360deg / var(--total-items) * var(--item-index))) translate(230px)
				rotate(calc(-360deg / var(--total-items) * var(--item-index)));
		}

		.focus-item-img-wrapper {
			width: 110px;
			height: auto;
			margin-bottom: 10px;
		}

		.focus-item-name {
			font-size: var(--font-size-small);
		}

		.focus-bottom-image {
			position: absolute;
			bottom: 30px;
			right: 3%;
			width: 300px;
			margin-top: 0;
		}

		.focus-bottom-image-text {
			font-size: var(--font-size-medium);
		}

		.focus-items-container::before {
			display: none;
		}
	}
</style>
