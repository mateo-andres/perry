<script>
	export let label;
	export let name;
	export let type = 'text';
	export let placeholder = '';
	export let required = true;
	export let value = false;
	export let labelClass = '';
</script>

<div>
	{#if label}
		<label class="label justify-start gap-4 font-bold {labelClass}" for={name}>
			<slot />
			{label}
		</label>
	{/if}

	{#if value}
		<input
			class="input w-full border-2 border-azul-300 focus:outline-none"
			{type}
			{name}
			{placeholder}
			{required}
			{value}
		/>
	{:else}
		<input
			class="input w-full border-2 border-azul-300 focus:outline-none"
			{type}
			{name}
			{placeholder}
			{required}
		/>
	{/if}
</div>
