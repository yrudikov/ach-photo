<script>
	import { onDestroy } from 'svelte';
	import { screen } from '$lib/store/useScreen.js';
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Citation from '$lib/components/Citation.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import Offer from '$lib/components/Offer.svelte';
	import OfferSecondPart from '$lib/components/OfferSecondPart.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import OfferInfo from '$lib/components/OfferInfo.svelte';
	import SEO from '$lib/components/SEO.svelte';

	onDestroy(() => {
		screen.cleanup();
	});
</script>

<SEO />
<Header />
<main class="container">
	<Hero />
	<About />
	<Offer />
	<OfferSecondPart />
	<Portfolio />
	<Citation />
	<Contact />
</main>
<OfferInfo />
