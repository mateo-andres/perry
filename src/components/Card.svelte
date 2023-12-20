<script>
	export let title;
	export let button = false;
</script>

<div class="card border border-mainBlue shadow-xl">
	<div class="card-body">
		<h2 class="card-title text-darkNavy"><slot name="icon" /> {title}</h2>
		<slot />
		{#if button}
			<div class="card-actions justify-center">
				<button class="btn bg-mainBlue hover:bg-darkBlue text-darkNavy">{button}</button>
			</div>
		{/if}
	</div>
</div>
