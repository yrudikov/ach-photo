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
		event.preventDefault(); // Отменяем стандартное поведение ссылки

		const targetId = event.currentTarget.getAttribute("href").substring(1); // Убираем #
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });
		}
	}
	function handleMobileNavClick(link) {
		scrollToSection({ preventDefault: () => {}, currentTarget: { getAttribute: () => link } });
		open = false;
	}

</script>

<header class="header">
	<div class="container">
		<!-- Навигация (десктоп) -->
		<nav class="nav">
			{#each content.header.nav as item}
				<a href={item.link} class="nav-link" onclick={scrollToSection}>{item.name}</a>
			{/each}
		</nav>

		<!-- Бургер-меню (мобильная версия) -->
		{#if isMobile}
<!--			<h1 class="header-title-mobile">Consulting 4.0</h1>-->
			<div class="header-logo-wrapper">
				<img src="/img/logo-consulting.png" alt="Logo" class="header-logo" />
			</div>
			<Hamburger bind:open type="spin" --color="var(--color-text)"
								 --active-color="var(--color-text)"
								 --padding="12px 15px 10px 15px" />
		{/if}
		<!-- Мобильное меню -->
		{#if open}
			<nav class="mobile-nav">
				{#each content.header.nav as item}
					<a href={item.link} class="mobile-nav-link" onclick={() => handleMobileNavClick(item.link)}>
						{item.name}
					</a>
				{/each}
			</nav>
		{/if}
	</div>
</header>

<style lang="scss">
  @use '$lib/styles/_mixins' as *;
  /* Mobile-First */
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--color-background);
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
	}

  .header-title-mobile {
		color: var(--color-textSecondary);
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
    gap: 10px;
  }

  .mobile-nav-link {
    color: var(--color-textSecondary);
    text-decoration: none;
    padding: 0 10px;
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
			max-width: 1200px;
      width: 100%;
      background-color: transparent;
      z-index: 1000;
    }

    .nav {
      display: flex;
			justify-content: space-between;
			align-items: center;
			max-width: 600px;
			width: 100%;
      background-color: var(--color-backgroundSecondary);
      padding: 1rem;
			border-radius: 3px 25px 25px 3px;
    }

    .nav-link {
      text-decoration: none;
      color: var(--color-textSecondary);
      font-weight: bold;
      background: transparent;
      border-radius: 20px;
    }
  }
</style>