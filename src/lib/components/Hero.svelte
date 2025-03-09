<script>
	import content from '$lib/content.json';

	let heroBackgroundStyle = `background-image: linear-gradient(to right, rgba(19, 18, 19, 0) 20%, rgba(19, 18, 19, 1) 60%),
                    url(${content.hero.heroImage});`;
</script>

<section id="hero" style={heroBackgroundStyle}>
	<div class="hero-titles-wrapper">
		<h1 class="hero-title">{content.hero.title}</h1>
		<div class="hero-descriptions">
			{#each content.hero.subtitle as item}
				<span class="hero-subtitle">{item.item}</span>
			{/each}
		</div>
	</div>
	<div class="hero-logo-wrapper">
		<img src="/img/logo-consulting.png" alt="Logo" class="hero-logo" />
		<div class="hero-divider"></div>
	</div>
</section>

<style lang="scss">
	@use '$lib/styles/_mixins' as *;

	#hero {
		display: block;
		background-size: 430px auto;
		background-position: 100px -22px;
		background-repeat: no-repeat;
		width: 100%;
	}

	.hero-titles-wrapper {
		background: rgba(19, 18, 19, 0.5);
		padding: 200px 0;
	}

	.hero-descriptions {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.hero-title {
		font-family: var(--font-subtitle), serif;
		color: white;
		font-size: 2.5rem;
		font-weight: 600;
	}

	.hero-subtitle {
		font-family: var(--font-title), serif;
		font-size: 1.1rem;
		font-weight: 300;
	}
	.hero-logo-wrapper {
		display: none;
	}

	@include media(tablet) {
		#hero {
			background-size: 630px auto;
			background-position: 140% -30px;
			background-repeat: no-repeat;
			width: 100%;
		}
		.hero-titles-wrapper {
			background: rgba(19, 18, 19, 0);
			padding: 250px 30px;
		}
		.hero-descriptions {
			display: flex;
			flex-direction: row;
			gap: 1rem;
			margin-top: 0;
		}
		.hero-title {
			font-family: var(--font-subtitle), serif;
			color: white;
			font-size: 5rem;
			font-weight: 300;
		}

		.hero-subtitle {
			font-family: var(--font-title), serif;
			font-size: 2rem;
		}

		.hero-logo-wrapper {
			display: block;
			padding: 0 30px;
			position: relative;
			.hero-logo {
				position: absolute;
				top: -32px;
				left: 27px;
			}
			.hero-divider {
				width: 100%;
				height: 5px;
				background: linear-gradient(
					to right,
					var(--color-backgroundSecondary) 60%,
					var(--color-background) 100%
				);
				margin: 20px;
			}
		}
	}
</style>
