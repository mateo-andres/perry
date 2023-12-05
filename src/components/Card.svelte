<script>
	export let title;
	export let button = false;
</script>

<div class="card bg-slate-400 shadow-xl">
	<div class="card-body">
		<h2 class="card-title"><slot name="icon" /> {title}</h2>
		<slot />
		{#if button}
			<div class="card-actions justify-center">
				<button class="btn btn-primary">{button}</button>
			</div>
		{/if}
	</div>
</div>
