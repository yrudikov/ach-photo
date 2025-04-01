<script>
	import { page } from '$app/stores';
	import content from '$lib/content.json';

	export let title = content.site.title;
	export let description = content.site.description;
	export let keywords =
		'fotografia, sesje zdjęciowe, plenerowe, ślubne, psów, produktowa, portrety, Zabrze, Katowice, Gliwice, Anna Cheba, ACH Fotografia';
	export let image = content.hero.heroImageDesktop;
	export let type = 'website';
	export let canonical = $page.url.href;

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"name": title,
		"description": description,
		"image": canonical + image,
		"url": canonical,
		"telephone": content.contact.content[0].text,
		"address": {
			"@type": "PostalAddress",
			"addressLocality": content.contact.content[3].text
		},
		"email": content.contact.content[2].text,
		"priceRange": "$$",
		"sameAs": content.contact.content
			.filter(item => item.url.includes('facebook') || item.url.includes('instagram'))
			.map(item => item.url)
	};
</script>

<svelte:head>
	<title>{title} – Fotograf Zabrze, Sesje Zdjęciowe i Plenerowe</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<link rel="canonical" href={canonical} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={canonical} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />

	<!-- JSON-LD -->
	<script type="application/ld+json">
		{JSON.stringify(structuredData)}
	</script>
</svelte:head>
