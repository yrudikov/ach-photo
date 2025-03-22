<script>
	import Carousel from 'svelte-carousel';
	import content from '$lib/content.json';
	import { browser } from '$app/environment';

	let carousel;

	function goToPrev() {
		if (carousel) carousel.goToPrev();
	}

	function goToNext() {
		if (carousel) carousel.goToNext();
	}
</script>

<div class="carousel-container">
	{#if browser}
		<Carousel
			bind:this={carousel}
			navigation={false}
			itemsToShow={1}
			itemsToScroll={1}
			loop
			particlePadding={10}
		>
			{#each content.portfolio.images as image}
				<div class="carousel-slide">
					<img src={image.src} alt={image.alt} class="carousel-image" />
				</div>
			{/each}
		</Carousel>

		<button class="nav-button prev-button" on:click={goToPrev} aria-label="Previous slide">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 18l-6-6 6-6"
				/>
			</svg>
		</button>

		<button class="nav-button next-button" on:click={goToNext} aria-label="Next slide">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 18l6-6-6-6"
				/>
			</svg>
		</button>
	{:else}
		<div class="fallback-container">
			{#each [content.portfolio.images[0]] as image}
				<img src={image.src} alt={image.alt} class="carousel-image" />
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	@use '$lib/styles/_mixins' as *;

	.carousel-container {
		width: 100%;
		margin: 30px auto;
		position: relative;
	}

	.carousel-slide {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 2px;
	}
	:global(.sc-carousel__pages-container) {
		margin: 0 -2px;
	}

	.fallback-container {
		width: 100%;
	}

	.carousel-image {
		width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 10px;
	}

	.nav-button {
		display: none;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background-color: var(--color-backgroundSecondary, rgba(255, 255, 255, 0.8));
		border: none;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		z-index: 10;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
		transition:
			background-color 0.3s,
			transform 0.2s;
	}

	.nav-button:hover {
		background-color: var(--color-backgroundSecondaryHower, rgba(255, 255, 255, 1));
		transform: translateY(-50%) scale(1.1);
	}

	:global(.sc-carousel__arrow-container) {
		display: none !important;
	}

	@include media(tablet) {
		.carousel-container {
			width: 66.67%;
			margin: 30px auto 0;
		}

		.nav-button {
			display: flex;
			width: 30px;
			height: 30px;
		}

		.prev-button {
			left: 15px;
		}

		.next-button {
			right: 20px;
		}
	}
</style>
