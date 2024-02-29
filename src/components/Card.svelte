<script>
	export let title;
	export let button = false;
	export let urlLink = '#';
</script>

<div class="card border border-mainBlue shadow-xl">
	<div class="card-body">
		<h2 class="card-title text-darkNavy"><slot name="icon" /> {title}</h2>
		<slot />
		<slot name="button_modal" />
		{#if button}
			<div class="card-actions justify-center">
				<a class="btn bg-mainBlue hover:bg-darkBlue text-darkNavy" href={urlLink}>{button}</a>
			</div>
		{/if}
	</div>
</div>
