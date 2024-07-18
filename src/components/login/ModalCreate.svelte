<script>
	import Modal from '$components/Modal.svelte';
	import Input from '$components/Input.svelte';
</script>

<Modal id_modal={'creationModal'}>
	<form action="?/userCreation" method="post" class="grid gap-1">
		<h3 class="font-bold text-xl mb-2">Crea un usuario nuevo</h3>
		<Input label={'Nombre Completo'} name={'name'} />
		<Input label={'Correo'} name={'email'} type={'email'} />
		<Input label={'Contraseña'} name={'password'} />
		<Input label={'Edad'} name={'age'} type={'number'} />
		<button
			class="btn bg-azul-100 hover:bg-azul-300 hover:text-white w-fit justify-self-center mt-3 text-lg"
		>
			Crear usuario
		</button>
	</form>
</Modal>
