<script>
	export let label;
	export let name;
	export let options = [
		{
			value: 'value1',
			label: 'opción 1'
		},
		{
			value: 'value2',
			label: 'opción 2'
		},
		{
			value: 'value3',
			label: 'opción 3'
		}
	];
</script>

<div>
	<label class="label justify-start gap-4 font-bold" for={name}>
		<slot />
		{label}
	</label>
	<select class="select select-sm select-error w-full" {name} id={name} required>
		<option value="">Selecciona una opción</option>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>
