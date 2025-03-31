<script>
	import content from '$lib/content.json';
	import Divider from './Divider.svelte';
	import Icon from '@iconify/svelte';
</script>

<footer id="contact" class="contact-section">
	<article class="contact-container">
		<div class="contact-logo-wrapper">
			<img src={content.contact.logo} alt="Logo ACH Fotografia" />
		</div>
		<div class="contact-divider"></div>
		<div class="contact-content">
			<h1 class="contact-title">{content.contact.title}</h1>
			<ul class="contact-subtitles-list">
				{#each content.contact.subtitles as item}
					<li class="contact-subtitles">{item}</li>
				{/each}
			</ul>
			<ul class="contact-item-list">
				{#each content.contact.content as item}
					<li class="contact-item">
						<Icon icon={item.icon} width="24" height="24" />
						<a href={item.url} target="_blank" rel="noopener noreferrer" title={item.title}>{item.text}</a>
					</li>

				{/each}
			</ul>
		</div>
	</article>
	<Divider />
</footer>

<style lang="scss">
  @use '$lib/styles/_mixins' as *;

  .contact-section {
    padding: 30px 0;
  }

  .contact-container {
    background-image: url('/img/logo-footer.webp');
    width: 100%;
    height: 500px;
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    color: var(--color-textSecondary);
    margin-bottom: 30px;
    border-radius: 4px;
  }

  .contact-content {
    display: flex;
    flex-direction: column;
		font-family: var(--font-title);
		gap: 2rem;

  }

	.contact-subtitles-list {
		font-size: var(--font-size-base);
		letter-spacing: 5px;
		font-weight: 400;
	}

  .contact-item-list {
    font-family: var(--font-body);
		font-size: var(--font-size-lg);
		font-weight: 300;
		a {
			color: var(--color-textSecondary);
    }
  }
	.contact-item {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}

  .contact-content ul {
    list-style: none;
  }

  .contact-title {
    color: var(--color-text);
    font-size: var(--font-size-xxl);
		font-weight: 400;
		letter-spacing: 10px;
  }
	.contact-logo-wrapper, .contact-divider {
		display: none;
	}

  @include media(tablet) {
		.contact-section {
			padding: 40px 60px 10px;
		}

    .contact-container {
      background: none;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			padding: 0;
			margin: 0 0 40px 0;
    }

    .contact-logo-wrapper {
			width: 500px;
      display: flex;

    }
		.contact-logo-wrapper img {
			width: 100%;
			object-fit: contain;
		}

		.contact-subtitles-list {
			font-size: var(--font-size-base);
			letter-spacing: 6px;
		}

		.contact-item-list {
			font-size: var(--font-size-lg);
		}

    .contact-title {
			font-size: var(--font-size-xxxl);
			letter-spacing: 14px;
    }

		.contact-divider {
			margin: 0 40px;
			display: flex;
			height: 450px;
			width: 2px;
			background: var(--background-medium-brown);
		}
  }
</style>
