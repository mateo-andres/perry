<script>
	export let form;
</script>

{#if form}
	<div class="toast toast-end">
		<div class="alert {form.success === true ? 'alert-success' : 'alert-error'} ">
			<span>{form.message}.</span>
			<button class="btn btn-sm" on:click={() => (form = null)}>X</button>
		</div>
	</div>
{/if}
