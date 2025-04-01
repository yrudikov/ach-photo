<script>
	import content from '$lib/content.json';
	import OfferCarousel from './OfferCarousel.svelte';
	import SectionTitle from '$lib/components/SectionTitle.svelte';

	let sectionTitleProps = {
		title: content.header.nav[2].name,
		color: 'var(--background-light-brown)',
		backgroundColor: 'var(--background-medium-brown)'
	};
</script>

<section id="offer-second" class="portfolio-section text-monserrat ">
	<SectionTitle {sectionTitleProps} />
	<div class="portfolio-content-wrapper">
		<OfferCarousel />
	</div>

</section>

<style lang="scss">
  @use '$lib/styles/_mixins' as *;

  .portfolio-section {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 70px 0 0;
  }

  .portfolio-content-wrapper {
    display: flex;
    flex-direction: column;
  }


  @include media(tablet) {
    .portfolio-section {
      padding: 70px 0 30px;
    }

    .portfolio-content-wrapper {
      display: flex;
      flex-direction: row;
    }

  }

</style>
