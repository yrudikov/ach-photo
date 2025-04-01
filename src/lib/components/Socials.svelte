<!--<script>-->
<!--	import content from '$lib/content.json';-->
<!--	import Icon from '@iconify/svelte';-->
<!--</script>-->

<!--<div class="socials">-->
<!--	{#each content.footer.socials as item}-->
<!--	<a href={item.url} target="_blank" rel="noopener noreferrer" title={item.title}>-->
<!--		<Icon icon={item.icon} width="30" height="30" />-->
<!--	</a>-->
<!--		{/each}-->
<!--</div>-->

<!--<style lang="scss">-->
<!--  @use '$lib/styles/_mixins' as *;-->

<!--  .socials {-->
<!--    position: sticky;-->
<!--		max-width: 120px;-->
<!--		width: 100%;-->
<!--    top: 90%;-->
<!--    left: 100%;-->
<!--    padding: 5px 10px;-->
<!--    z-index: 2;-->
<!--    border-radius: var(&#45;&#45;border-radius-primary);-->
<!--		background: var(&#45;&#45;background-medium-brown);-->
<!--		box-shadow: 0 0 5px var(&#45;&#45;background-dark-brown);-->
<!--		display: flex;-->
<!--		justify-content: space-between;-->
<!--		align-items: center;-->


<!--		a {-->
<!--			text-decoration: none;-->
<!--      color: var(&#45;&#45;color-text-white);-->
<!--			display: flex;-->
<!--			align-items: center;-->
<!--		}-->

<!--		a:hover {-->
<!--      color: var(&#45;&#45;background-dark-brown);-->
<!--    }-->
<!--  }-->

<!--  @include media(tablet) {-->
<!--    .socials {-->
<!--      font-size: var(&#45;&#45;font-size-xl);-->
<!--    }-->
<!--  }-->
<!--</style>-->

<script>
	import content from '$lib/content.json';
	import Icon from '@iconify/svelte';
	import { onMount, onDestroy } from 'svelte';

	let isScrolling = false;
	let timeout;
	let isColored = false;

	onMount(() => {

		const handleScroll = () => {
			isScrolling = true;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				isScrolling = false;
			}, 300);
		};

		window.addEventListener('scroll', handleScroll);

		const targets = ['offer', 'portfolioCarousel'];
		const observedSections = targets.map(id => document.getElementById(id)).filter(Boolean);

		const observer = new IntersectionObserver(
			(entries) => {
				let intersecting = entries.some(entry => entry.isIntersecting);
				isColored = intersecting;
			},
			{
				threshold: 0.4
			}
		);

		observedSections.forEach((section) => observer.observe(section));

		return () => {
			clearTimeout(timeout);
			window.removeEventListener('scroll', handleScroll);
			observedSections.forEach((section) => observer.unobserve(section));
		};
	});
</script>

<div class="socials" class:is-hidden={isScrolling} class:is-colored={isColored}>
	{#each content.footer.socials as item}
		<a href={item.url} target="_blank" rel="noopener noreferrer" title={item.title}>
			<Icon icon={item.icon} width="30" height="30" />
		</a>
	{/each}
</div>


<style lang="scss">
  @use '$lib/styles/_mixins' as *;

  .socials {
    position: sticky;
    top: 90%;
    left: 100%;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    width: 100%;
    max-width: 120px;
    border-radius: var(--border-radius-primary);
    background: var(--background-medium-brown);
    box-shadow: 0 0 5px var(--background-dark-brown);
    transition: all 0.3s ease;
    color: var(--color-text-white);

    &.is-hidden {
      opacity: 0;
      pointer-events: none;
    }

    &.is-colored {
      background: var(--background-light-brown); // например
      color: var(--color-primary);
      box-shadow: 0 0 5px var(--color-primary);

      a {
        color: var(--color-primary);
      }

      a:hover {
        color: var(--background-dark-brown);
      }
    }

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      color: inherit;
      transition: color 0.2s ease;
    }

    a:hover {
      color: var(--background-dark-brown);
    }
  }

</style>
