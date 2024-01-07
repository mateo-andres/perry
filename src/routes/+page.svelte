<script>
	import Modal from '$components/Modal.svelte';
	import Input from '$components/Input.svelte';
	import Toast from '$components/Toast.svelte';

	export let form;
</script>

<Toast {form} />

<main
	class="bg-mainBlue p-6 grid w-full min-h-screen
    bg-gradient-to-r
    from-darkBlue
    via-navy
    to-darkNavy
    background-animate"
>
	<h1 class="text-3xl font-bold text-white text-center h-4">Asistente Virtual</h1>
	<img alt="icono del asistente virtual" src="/assets/bot2.png" class="m-auto h-96 w-96" />

	<section class="grid">
		<h2 class="text-white text-xl font-bold">Iniciar sesión</h2>
		<form class="grid gap-2" method="post" action="?/login">
			<Input label={'Correo'} name={'email'} />
			<Input label={'Contraseña'} name={'password'} type={'password'} />
			<input
				type="submit"
				value="Ingresar"
				class="bg-mainBlue hover:bg-darkBlue rounded-md p-2 text-darkNavy font-bold"
			/>
		</form>

		<button class="btn mt-8 text-darkBlue hover:text-darkNavy" onclick="creationModal.showModal()"
			>Crear cuenta</button
		>
	</section>
</main>

<Modal id_modal={'creationModal'} boton={'Crear usuario'} action={'userCreation'}>
	<h3 class="font-bold text-lg mb-2" slot="title">Crea un usuario nuevo</h3>
	<Input label={'Nombre Completo'} name={'name'} />
	<Input label={'Correo'} name={'email'} type={'email'} />
	<Input label={'Contraseña'} name={'password'} />
	<Input label={'Edad'} name={'age'} type={'number'} />
</Modal>

<style>
	.background-animate {
		background-size: 400%;

		-webkit-animation: AnimationName 4s ease infinite;
		-moz-animation: AnimationName 4s ease infinite;
		animation: AnimationName 4s ease infinite;
	}

	@keyframes AnimationName {
		0%,
		100% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
	}
</style>
