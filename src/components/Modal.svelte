<script>
	export let id_modal;
</script>

<dialog id={id_modal} class="modal">
	<div class="modal-box">
		<form method="dialog">
			<button class="btn btn-circle btn-ghost absolute right-2 top-2 text-xl">✕</button>
		</form>
		<slot />
	</div>
</dialog>
