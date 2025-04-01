<script>
	import { Hamburger } from 'svelte-hamburgers';
	import content from '$lib/content.json';
	import { onMount } from 'svelte';

	let open = $state(false);
	let isMobile = $state(false);

	const checkScreenSize = () => {
		isMobile = window.innerWidth <= 767;
	};

	onMount(() => {
		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);
		return () => window.removeEventListener('resize', checkScreenSize);
	});

	function scrollToSection(event) {
		event.preventDefault();

		const targetId = event.currentTarget.getAttribute('href').substring(1);
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			const offset = !isMobile ? 70 : 70;
			const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

			window.scrollTo({ top: elementPosition, behavior: 'smooth' });
			open = false;
		}
	}
</script>

<header class="header">
	<div class="container">
		<nav class="nav">
			<div class="header-logo-wrapper">
				<a href={content.header.nav[0].link} class=" text-nav-about-ul" onclick={scrollToSection}>
					<img src="/img/logo-header.webp" alt="Logo" class="header-logo" />
				</a>

			</div>
			{#each content.header.nav.slice(1) as item}
				<a href={item.link} class="nav-link text-nav-about-ul" onclick={scrollToSection}
					>{item.name}</a
				>
			{/each}
		</nav>

		{#if isMobile}
			<div class="header-logo-wrapper">
				<img src="/img/logo-header-mobile.webp" alt="Logo" class="header-logo" />
			</div>
			<div style="filter: drop-shadow(0 0 10px var(--color-secondary));">
				<Hamburger
					bind:open
					type="spin"
					--color="var(--color-textSecondary)"
					--active-color="var(--color-textSecondary)"
					--padding="12px 15px 10px 15px"
				/>
			</div>
		{/if}
		{#if open}
			<nav class="mobile-nav">
				{#each content.header.nav as item}
					<a href={item.link} class="mobile-nav-link text-nav-about-ul" onclick={scrollToSection}>
						{item.name}
					</a>
				{/each}
			</nav>
		{/if}
	</div>
</header>

<style lang="scss">
	@use '$lib/styles/_mixins' as *;

	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: transparent;
		padding: 8px 0;
		z-index: 1000;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 0 0 1rem;
	}

	.header-logo-wrapper {
		max-width: 80px;
		display: flex;
	}
	.header-logo {
		width: 100%;
		height: 100%;
		object-fit: contain;
		align-self: center;
		filter: drop-shadow(0 0 1px var(--color-secondary));
	}

	.mobile-nav {
		position: absolute;
		width: 92%;
		top: 75px;
		left: 50%;
		transform: translateX(-50%);
		background: var(--color-backgroundSecondary);
		padding: 10px;
		display: flex;
		flex-direction: column;
		gap: 5px;
		border-radius: var(--border-radius-primary);
		box-shadow: 0 0 6px var(--color-secondary);
	}

	.mobile-nav-link {
		color: var(--color-text-white);
		text-decoration: none;
		padding: 0;
		background: var(--color-backgroundSecondary);
		text-align: center;
		letter-spacing: 4px;
	}

	.nav {
		display: none;
	}

	@include media(tablet) {
    .header {
      position: sticky;
      top: 0;
      margin: 60px auto -132px;
      width: 100%;
      background-color: transparent;
      z-index: 1000;
			padding: 0;

    }

		.nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			max-width: 800px;
			width: 100%;
			background-color: var(--color-backgroundSecondary);
			padding: 0 8rem 0 3rem;
			border-radius: 1px;
      box-shadow: 0 0 10px var(--color-secondary);
		}

		.nav-link {
			text-decoration: none;
			color: var(--color-text-white);
			font-weight: 600;
			background: transparent;
			border-radius: 20px;
			letter-spacing: 4px;
			font-size: var(--font-size-xl);
			margin-top: 5px;
		}

		.text-nav-about-ul:hover {
			filter: drop-shadow(0 0 8px rgba(19, 18, 19, 0.8));
		}
	}
</style>
