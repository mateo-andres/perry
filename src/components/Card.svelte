<script>
	export let title;
	export let button = false;
	export let urlLink = '#';
</script>

<div class="card border-azul-100 border-2 shadow-lg">
	<div class="card-body py-4 px-5">
		<h2
			class="card-title text-azul-400 items-center font-inconsolata font-extrabold justify-center"
		>
			<slot name="icon" />
			{title}
		</h2>
		<slot />
		<slot name="button_modal" />
		{#if button}
			<div class="card-actions justify-center">
				<a class="btn bg-mainBlue hover:bg-darkBlue text-azul-300" href={urlLink}>{button}</a>
			</div>
		{/if}
	</div>
</div>
