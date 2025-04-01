<script>
	import '@slidy/svelte/dist/slidy.css';
	import { Slidy, classNames } from '@slidy/svelte';
	import { stairs } from '@slidy/animation';
	import { onMount, onDestroy } from 'svelte';
	import content from '$lib/content.json';

	const pathToImages = '/img/portfolioCarousel/';
	const imagesCount = 20;


	const createSlides = () => {
		const images = [];
		for (let i = 1; i <= imagesCount; i++) {
			images.push({
				id: i,
				src: `${pathToImages}${i}.webp`,
				width: 500,
				height: 400,
				alt: content.portfolio.portfolioCarousel
			});
		}
		return images;
	};

	const slides = createSlides();

	let currentIndex = 0;

	const autoplayDuration = 3000;
	const userInteractionPause = 3000;

	let autoplayInterval;
	let interactionTimeout;

	function startAutoplay() {
		clearInterval(autoplayInterval);
		autoplayInterval = setInterval(() => {
			currentIndex = (currentIndex + 1) % slides.length;
		}, autoplayDuration);
	}

	function stopAutoplayTemporarily() {
		clearInterval(autoplayInterval);
		clearTimeout(interactionTimeout);

		interactionTimeout = setTimeout(() => {
			startAutoplay();
		}, userInteractionPause);
	}

	onMount(() => {
		startAutoplay();
	});

	onDestroy(() => {
		clearInterval(autoplayInterval);
		clearTimeout(interactionTimeout);
	});


	function handleInteraction() {
		stopAutoplayTemporarily();
	}
</script>

<div id="portfolioCarousel" class="carousel-wrapper"
		 on:pointerdown={handleInteraction}
		 on:wheel={handleInteraction}
		 on:touchstart={handleInteraction}>
	<Slidy
		{slides}
		bind:index={currentIndex}
		animation={stairs}
		loop={true}
		duration={300}
		clamp={0}
		navigation={false}
		arrows={false}
		progress={false}
		classNames={{
      root: `${classNames.root} custom-slidy`,
      slide: `${classNames.slide} custom-slide`,
      counter: `slidy-counter`,
      ...classNames
    }}
		--slidy-slide-height="350px"
		--slidy-slide-radius="2px"
	/>
</div>

<style>
    .carousel-wrapper {
        width: 100%;
        padding-top: 40px;
        overflow: hidden;
        touch-action: pan-y;
    }

    :global(.slidy-counter) {
        display: none;
    }



</style>