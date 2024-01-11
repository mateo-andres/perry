<script>
	export let id_modal, action, boton;
</script>

<dialog id={id_modal} class="modal">
	<div class="modal-box">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
		</form>
		<slot name="title" />
		<form action="?/{action}" method="post" class="grid gap-1">
			<slot />
			{#if boton}
				<button class="btn bg-mainBlue hover:bg-darkBlue w-fit justify-self-center mt-3">
					{boton}
				</button>
			{/if}
		</form>
	</div>
</dialog>
