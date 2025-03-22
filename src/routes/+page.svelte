<script>
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Citation from '$lib/components/Citation.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Focus from '$lib/components/Focus.svelte';
	import Offer from '$lib/components/Offer.svelte';
	import Portfolio from '$lib/components/Portfolio.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import OfferInfo from '$lib/components/OfferInfo.svelte';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO />
<Header />
<main class="container">
	<Hero />
	<About />
	<Offer />
	<Portfolio />
	<Experience />
	<Citation />
	<Focus />
	<Contact />
</main>
<OfferInfo />
