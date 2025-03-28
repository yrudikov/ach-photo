<script>
	import Carousel from 'svelte-carousel';
	import content from '$lib/content.json';
	import { browser } from '$app/environment';
	import {screen} from '$lib/store/useScreen.js';
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
			particlesToShow={$screen.isDesktop ? 3 : 1}
			particlesToScroll={1}
			loop
			partialPadding={10}
		>
			{#each content.portfolio.images as image}
				<div class="carousel-slide">
					<img src={image.src} alt={image.alt} class="carousel-image" />
				</div>
			{/each}
		</Carousel>

<!--		<button class="nav-button prev-button" on:click={goToPrev} aria-label="Previous slide">-->
<!--			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">-->
<!--				<path-->
<!--					fill="none"-->
<!--					stroke="currentColor"-->
<!--					stroke-linecap="round"-->
<!--					stroke-linejoin="round"-->
<!--					stroke-width="2"-->
<!--					d="M15 18l-6-6 6-6"-->
<!--				/>-->
<!--			</svg>-->
<!--		</button>-->

<!--		<button class="nav-button next-button" on:click={goToNext} aria-label="Next slide">-->
<!--			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">-->
<!--				<path-->
<!--					fill="none"-->
<!--					stroke="currentColor"-->
<!--					stroke-linecap="round"-->
<!--					stroke-linejoin="round"-->
<!--					stroke-width="2"-->
<!--					d="M9 18l6-6-6-6"-->
<!--				/>-->
<!--			</svg>-->
<!--		</button>-->

		<button class="nav-button prev-button" on:click={goToPrev} aria-label="Poprzedni slajd">

			<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" class="nav-icon">
				<path fill="var(--background-dark-brown)" d="M9.857 15.962a.5.5 0 0 0 .243.68l9.402 4.193c1.496.667 3.047-.814 2.306-2.202l-3.152-5.904c-.245-.459-.245-1 0-1.458l3.152-5.904c.741-1.388-.81-2.87-2.306-2.202l-3.524 1.572a2 2 0 0 0-.975.932z"/>
				<path fill="var(--background-dark-brown)" d="M8.466 15.39a.5.5 0 0 1-.65.233l-4.823-2.15c-1.324-.59-1.324-2.355 0-2.945L11.89 6.56a.5.5 0 0 1 .651.68z" opacity="1" />
			</svg>
		</button>

		<button class="nav-button next-button" on:click={goToNext} aria-label="Następny slajd">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="nav-icon">
				<path fill="var(--background-dark-brown)" d="M14.143 15.962a.5.5 0 0 1-.244.68l-9.402 4.193c-1.495.667-3.047-.814-2.306-2.202l3.152-5.904c.245-.459.245-1 0-1.458L2.191 5.367c-.74-1.388.81-2.87 2.306-2.202l3.525 1.572a2 2 0 0 1 .974.932z"/>
				<path fill="var(--background-dark-brown)" d="M15.533 15.39a.5.5 0 0 0 .651.233l4.823-2.15c1.323-.59 1.323-2.355 0-2.945L12.109 6.56a.5.5 0 0 0-.651.68z" opacity="1"/>
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
		padding: 0 10px;
	}

	.fallback-container {
		width: 100%;
	}

	.carousel-image {
		width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: var(--border-radius-primary);
	}

	.nav-button {
		display: none;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 30px;
		height: 30px;
		background-color: transparent;
		border: none;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		z-index: 10;
    filter: drop-shadow(0 0 2px var(--background-light-brown));
		transition:
			transform 0.2s;
	}

	.nav-button:hover {
		transform: translateY(-50%) scale(1.3);
	}

	:global(.sc-carousel__arrow-container) {
		display: none !important;
	}

	@include media(tablet) {
		.carousel-container {
      width: 100%;
			margin: 30px auto 0;
		}

    .carousel-slide {
      width: 100%;
      flex: 1 0 auto;
      padding: 0 4px;
    }

		.nav-button {
			display: flex;
      width: 36px;
      height: 36px;
		}

		.prev-button {
			left: 15px;
		}

		.next-button {
			right: 20px;
		}
	}
</style>
