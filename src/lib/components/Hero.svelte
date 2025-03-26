<script>
	import content from '$lib/content.json';
	import { screen } from '$lib/store/useScreen.js';

</script>

<section id="hero" class="hero">
	<div class="hero-titles-wrapper">
		<h1 class="hero-title">{content.hero.title}</h1>
		<div class="hero-descriptions">
			{#each content.hero.subtitle as item}
				<span class="hero-subtitle">{item.item}</span>
			{/each}
		</div>
	</div>
	{#if $screen.isDesktop}
		<div class="hero-img-wrapper-desktop">
			<img src={content.hero.heroImageDesktop} alt={content.hero.heroImageAlt} class="hero-img">
		</div>
	{:else if $screen.isTablet}
		<div class="hero-img-wrapper-tablet">
			<img src={content.hero.heroImageTablet} alt={content.hero.heroImageAlt} class="hero-img">
		</div>
	{:else}
		<div class="hero-img-wrapper-mobile">
			<img src={content.hero.heroImageMobile} alt={content.hero.heroImageAlt} class="hero-img">
		</div>
	{/if}
</section>

<style lang="scss">
  @use '$lib/styles/_mixins' as *;

  .hero {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    text-transform: uppercase;
    font-family: var(--font-title);
    margin-top: 40px;
  }

  .hero-titles-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  .hero-descriptions {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  .hero-title {
    color: var(--color-text);
    font-size: 3rem;
    font-weight: 600;

  }

  .hero-subtitle {
    color: var(--color-textSecondary);
    font-size: 1.5rem;
    font-weight: 500;
  }

  .hero-img {
    width: 100%;
    object-fit: contain;
  }

  @include media(tablet) {
    .hero {
      flex-direction: row;
      justify-content: space-between;
    }
    .hero-titles-wrapper {
      padding: 300px 0;
      text-align: center;
    }
    .hero-descriptions {
      flex-direction: row;
      margin-top: 0;
      letter-spacing: 3px;
    }

    .hero-img-wrapper-tablet {
      width: 80%;
      display: flex;
    }

    .hero-title {
      font-size: 3rem;
      letter-spacing: 16px;
    }

    .hero-subtitle {
      font-size: 1.5rem;
    }

  }

  @include media(desktop) {

    .hero {
      flex-direction: row;
      justify-content: space-between;
    }

    .hero-titles-wrapper {
      margin-left: 50px;
      padding: 200px 0;
    }
    .hero-descriptions {
      flex-direction: column;
      gap: 4rem;
      margin-top: 0;
    }

    .hero-img-wrapper-desktop {
      display: block;
      max-width: 320px;
      padding: 40px 0;
    }

    .hero-descriptions {
      flex-direction: row;
    }

    .hero-title {
      font-size: 5rem;
      letter-spacing: 20px;
    }

    .hero-subtitle {
      font-size: 2.5rem;
    }

  }
</style>
