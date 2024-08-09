<script>
	export let form;
</script>

{#if form}
	<div class="toast toast-end mb-9 z-50">
		<div class="alert {form.success === true ? 'alert-success' : 'alert-error'}  flex">
			<span class="text-white">{form}.</span>
			<button class="btn btn-sm" on:click={() => (form = null)}>X</button>
		</div>
	</div>
{/if}
