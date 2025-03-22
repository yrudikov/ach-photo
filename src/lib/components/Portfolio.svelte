<script>
	import content from "$lib/content.json";
	import PortfolioCarousel from "./PortfolioCarousel.svelte";
	import Divider from '$lib/components/Divider.svelte';
</script>

<section class="portfolio-section text-monserrat ">
	<Divider />
	<div class="portfolio-content-wrapper">
		<article class="portfolio-text-container">
			<h2 class="portfolio-subtitle"> {content.portfolio.title}</h2>

			{#each content.portfolio.content as item}
				<hr class="portfolio-divider" />
				<p class="portfolio-text-content">{item.text}</p>
			{/each}
		</article>
		<PortfolioCarousel />
	</div>

</section>

<style lang="scss">
  @use '$lib/styles/_mixins' as *;

	.portfolio-section {
		display: flex;
		flex-direction: column;
		text-align: center;
		margin-top: 40px;
	}
	.portfolio-content-wrapper {
    display: flex;
    flex-direction: column;
	}

	.portfolio-subtitle, .portfolio-text-content {
    font-weight: 300;
	}
  .portfolio-subtitle {
		font-size: 18px;
	}
  .portfolio-text-content {
		font-size: 1rem;
	}

  .portfolio-divider {
    width: 100px;
    height: 2px;
    background-color: var(--color-text);
    border: none;
    margin: 1rem auto;
	}

	.portfolio-text-container {
		display: flex;
		flex-direction: column;
		margin-top: 30px;
		padding: 0 40px;
	}



	@include media(tablet) {
    .portfolio-content-wrapper {
      display: flex;
      flex-direction: row;
    }

	.portfolio-text-container {
		justify-content: center;
		max-width: 33%;
		margin-top: 0;
	}

	.portfolio-subtitle {
		font-size: var(--font-size-lg);
		letter-spacing: 1px;
	}
  .portfolio-text-content {
		font-size: var(--font-size-medium);
		letter-spacing: 1px;
	}




	}

</style>
