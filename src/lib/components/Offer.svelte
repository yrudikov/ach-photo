<script>
	import content from '$lib/content.json';
	import SectionTitle from '$lib/components/SectionTitle.svelte';
	import { slide, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let desktopContent;
	let activeIndex = null;

	onMount(() => {
		if (window.innerWidth >= 768) {
			activeIndex = 0;
		}
	});

	const setActive = (index) => {
		if (window.innerWidth >= 768) {
			activeIndex = index;
		} else {
			activeIndex = activeIndex === index ? null : index;
		}
	};

	let sectionTitleProps = {
		title: 'W ofercie',
		color: 'var(--color-text)',
		backgroundColor: 'var(--background-light-brown)'
	};
</script>

<section id="offer" class="offer-section">
	<SectionTitle {sectionTitleProps} />
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
							<img class="offer-image" style="width: 100%;" src={item.description.src} alt={item.description.alt} />
						</div>
					{/if}
				</li>
			{/each}
		</ul>
		{#if activeIndex !== null}
			{#key activeIndex}
				<div bind:this={desktopContent} class="offer-content desktop-content"
						 in:fly={{ duration: 700, x: 100 }}>
					<!--					 out:fly={{ duration: 100, x: 100 }}>-->
					<img class="offer-image" style="width: 100%;" src={content.offer.items[activeIndex]?.description.src}
							 alt={content.offer.items[activeIndex]?.description.alt} />
				</div>
			{/key}
		{/if}
	</article>
</section>

<style lang="scss">
  @use '$lib/styles/_mixins' as *;

  .offer-section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 50px;
    background: var(--color-backgroundSecondary);

  }

  .offer-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 50px 20px 30px;
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
    border-radius: 2px 2px 0 0;
  }

  .offer-button {
    width: 100%;
    padding: 10px;
    background: var(--background-light-brown);
    color: var(--color-text);
    font-size: var(--font-size-medium);
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    text-align: center;
    transition: background 0.3s, border-radius 2s;
    letter-spacing: 3px;
  }


  .mobile-content {
    max-height: 0;
    overflow: hidden;
    background: transparent;
    font-size: 1rem;
    color: var(--color-text-white);
    text-align: left;
    border-radius: 0 0 2px 2px;
    transition: max-height 0.4s ease, padding 0.4s ease;

    .offer-image {
      border-radius: 0 0 2px 2px;
    }
  }

  .mobile-content.visible {
    max-height: 500px;
  }

  .offer-button.visible {
    border-radius: 2px 2px 0 0;
    transition: border-radius 0.1s;
  }

  .desktop-content {
    display: none;
  }


  @include media(tablet) {
    .offer-section {
      padding: 80px 0 40px;

    }

    .offer-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100vw;
      height: 100%;
      background: var(--color-backgroundSecondary);
      z-index: -1;
    }

    .offer-container {
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;
      padding: 0;
      height: 460px;
      overflow: hidden;
    }

    .offer-list {
      flex: 0 0 40%;
      justify-content: center;
      gap: 20px;
    }

    .offer-button {
      font-size: var(--font-size-lg);
      letter-spacing: 6px;
    }
    .offer-button, .offer-button.visible, .offer-list-item, .offer-list-item.active .offer-button {
      border-radius: var(--border-radius-base);
    }

    .mobile-content, .mobile-content.visible {
      display: none;
    }

    .desktop-content {
      display: flex;
      width: 50%;
      background: var(--color-backgroundSecondary);
      font-size: 1rem;
      color: var(--color-textSecondary);
      text-align: left;

      .offer-image {
        max-height: 460px;
        width: 100%;
        object-fit: contain;
        margin: auto;
        transition: transform 0.4s ease;
      }
    }


    .offer-image:hover {
      transform: scale(1.3);
    }
    .offer-button:hover {
      box-shadow: 0 0 20px var(--background-dark-brown);
    }
  }
</style>