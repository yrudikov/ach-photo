<script>
	export let sectionTitleProps;

	console.log(sectionTitleProps);
</script>

<div class="SectionTitle"
		 style="color: {sectionTitleProps?.color}; background-color: {sectionTitleProps?.backgroundColor};">
	{sectionTitleProps?.title}</div>

<style lang="scss">
  @use '$lib/styles/_mixins' as *;

    .SectionTitle {
        position: absolute;
        top: 20px;
        left: 0;
				padding: 12px 30px 8px 20px;
				font-family: var(--font-subtitle);
				font-size: var(--font-size-lg);
				font-weight: 600;
				letter-spacing: 5px;
    }

  @include media(tablet) {
    .SectionTitle {
      font-size: var(--font-size-xl);
		}
	}
</style>