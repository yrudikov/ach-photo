<script>
	import content from '$lib/content.json';
	import Divider from '$lib/components/Divider.svelte';
	import { slide, fly } from 'svelte/transition';

	let desktopContent;
	let activeIndex = null;

	const setActive = (index) => {
		activeIndex = activeIndex === index ? null : index;
	};
</script>

<section id="offer" class="offer-section">
	<h1 class="section-title text-monserrat">{content.offer.title}</h1>
	<Divider />
	<article class="offer-container">
		<ul class="offer-list">
			{#each content.offer.items as item, index}
				<li class="offer-list-item {index === activeIndex ? 'active' : ''}">
					<button class="text-bebas offer-button {index === activeIndex ? 'visible' : ''}"
									on:click={() => setActive(index)}>
						{item.title}
					</button>

					{#if activeIndex !== null && index === activeIndex}
						<div class="offer-content mobile-content visible"
								 in:slide={{ duration: 500 }} out:slide={{ duration: 300 }}>
							<p class="text-monserrat">{item.description}</p>
						</div>
					{/if}
				</li>
			{/each}
		</ul>
		{#if activeIndex !== null}
			<div bind:this={desktopContent} class="offer-content desktop-content"
					 in:fly={{ duration: 700, x: 100 }}
					 out:fly={{ duration: 700, x: 100 }}>
				<p class="text-monserrat">{content.offer.items[activeIndex]?.description}</p>
			</div>
		{/if}
	</article>
</section>

<style lang="scss">
  @use '$lib/styles/_mixins' as *;

  .offer-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 40px;
  }

  .offer-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-top: 30px;
  }

  .offer-list {
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .offer-list-item {
    position: relative;
    text-align: center;
    border-radius: 20px;
  }

  .offer-list-item.active .offer-button {
    border-radius: 10px 10px 0 0;
  }

  .offer-button {
    width: 100%;
    padding: 10px;
    background: var(--color-backgroundSecondary);
    color: var(--color-textSecondary);
    font-size: var(--font-size-base);
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    text-align: center;
    transition: background 0.3s, border-radius 2s;
		letter-spacing: 1px;
  }

  .offer-button:hover, .offer-button:focus, .offer-list-item.active .offer-button {
    border: none;
  }

  .mobile-content {
    max-height: 0;
    overflow: hidden;
    padding: 0 1rem;
    background: var(--color-backgroundSecondary);
    font-size: 1rem;
    color: var(--color-textSecondary);
    text-align: left;
    border-radius: 0 0 10px 10px;
    transition: max-height 0.4s ease, padding 0.4s ease;
  }

  .mobile-content.visible {
    max-height: 500px;
    padding: 1rem;
  }

  .offer-button.visible {
    border-radius: 10px 10px 0 0;
    transition: border-radius 0.1s;
  }

  .desktop-content {
    display: none;
  }

  @include media(tablet) {
    .offer-container {
      flex-direction: row;
      justify-content: flex-start;
      gap: 20px;
    }

    .offer-list {
      flex: 0 0 50%;
    }

    .offer-button {
			letter-spacing: 6px;
		}
    .offer-button, .offer-button.visible, .offer-list-item, .offer-list-item.active .offer-button {
      border-radius: 5px 20px 20px 5px;
    }

    .mobile-content, .mobile-content.visible {
      display: none;
    }

    .desktop-content {
      display: block;
      width: 50%;
      padding: 20px;
      background: var(--color-backgroundSecondary);
      border-radius: 40px 4px 4px 40px;
      font-size: 1rem;
      color: var(--color-textSecondary);
      text-align: left;
    }

		.offer-button:hover {
      background: var(--color-backgroundSecondaryHower);
		}
  }
</style>