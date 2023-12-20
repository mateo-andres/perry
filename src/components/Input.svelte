<script>
	export let label;
	export let name;
	export let type = 'text';
	export let placeholder = '';
	export let required = true;
</script>

<div>
	<label class="label justify-start gap-4 font-bold" for={name}>
		<slot />
		{label}
	</label>
	<input class="input w-full border border-mainBlue" {type} {name} {placeholder} {required} />
</div>
