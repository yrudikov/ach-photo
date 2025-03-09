<script>
	import content from '$lib/content.json';
	import Divider from './Divider.svelte';
</script>

<footer id="contact" class="contact-section">
	<article class="contact-container">
		<div class="contact-content">
			<h1 class="section-title text-monserrat contact-title">{content.contact.title}</h1>
			{#each content.contact.content as item}
				<div class="contact-item">
					<p class="text-monserrat">{item.text}</p>
				</div>
			{/each}
		</div>
	</article>
	<Divider />
</footer>

<style lang="scss">
	@use '$lib/styles/_mixins' as *;

	.contact-content {
		border-radius: 4px;
		background-color: var(--color-background);
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(1px);
		border-radius: 10px;
		padding: 10px;
	}

	.contact-section {
		margin-bottom: 40px;
	}

	.contact-container {
		background-image: url('/img/contact-image.webp');
		width: 100%;
		height: 440px;
		background-size: 1000px auto;
		background-position: 65% 75%;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-end;
		padding: 20px;
		color: var(--color-textSecondary);
		margin-bottom: 30px;
		border-radius: 4px;
	}

	.contact-title {
		color: var(--color-textSecondary);
		text-align: left;
	}

	@include media(tablet) {
		.contact-container {
			color: var(--color-text);
			background-size: cover;
			background-position: auto;
			height: 600px;
		}
		.contact-title {
			color: var(--color-text);
		}
		.contact-content {
			background: none;
			backdrop-filter: none;
		}
	}
</style>
