<script>
	import { Hamburger } from 'svelte-hamburgers';
	import content from '$lib/content.json';
	import { onMount } from 'svelte';

	let open = $state(false);

	let isMobile = $state(false);

	const checkScreenSize = () => {
		isMobile = window.innerWidth <= 768;
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
			const offset = !isMobile ? 140 : 70;
			const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

			window.scrollTo({ top: elementPosition, behavior: 'smooth' });
			open = false;
		}
	}
</script>

<header class="header">
	<div class="container">
		<nav class="nav">
			{#each content.header.nav as item}
				<a href={item.link} class="nav-link text-nav-about-ul" onclick={scrollToSection}
					>{item.name}</a
				>
			{/each}
		</nav>

		{#if isMobile}
			<div class="header-logo-wrapper">
				<img src="/img/logo-consulting.png" alt="Logo" class="header-logo" />
			</div>
			<div style="filter: drop-shadow(0 0 3px rgba(19, 18, 19, 1));">
				<Hamburger
					bind:open
					type="spin"
					--color="var(--color-text)"
					--active-color="var(--color-text)"
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
		max-width: 150px;
		display: flex;
	}
	.header-logo {
		width: 100%;
		height: 100%;
		object-fit: contain;
		align-self: center;
		filter: drop-shadow(0 0 10px rgba(19, 18, 19, 1));
	}

	.mobile-nav {
		position: absolute;
		width: 100%;
		top: 60px;
		left: 50%;
		transform: translateX(-50%);
		background: var(--color-backgroundSecondary);
		padding: 10px;
		display: flex;
		flex-direction: column;
		gap: 5px;
		border-radius: 20px;
		box-shadow: 0 0 8px rgba(19, 18, 19, 1);
	}

	.mobile-nav-link {
		color: var(--color-textSecondary);
		text-decoration: none;
		padding: 0;
		background: var(--color-backgroundSecondary);
		text-align: center;
	}

	.nav {
		display: none;
	}

	@include media(tablet) {
		.header {
			position: fixed;
			top: 60px;
			left: 50%;
			transform: translateX(-50%);
			width: 100%;
			background-color: transparent;
			z-index: 1000;
		}

		.nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			max-width: 700px;
			width: 100%;
			background-color: var(--color-backgroundSecondary);
			padding: 0.5rem 1.5rem;
			border-radius: 3px 25px 25px 3px;
			box-shadow: 0 0 8px rgba(19, 18, 19, 1);
		}

		.nav-link {
			text-decoration: none;
			color: var(--color-textSecondary);
			font-weight: bold;
			background: transparent;
			border-radius: 20px;
		}

		.text-nav-about-ul:hover {
			filter: drop-shadow(0 0 8px rgba(19, 18, 19, 0.8));
		}
	}
</style>
