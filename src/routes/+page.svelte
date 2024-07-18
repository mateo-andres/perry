<script>
	import Input from '$components/Input.svelte';
	import Toast from '$components/Toast.svelte';
	import ModalCreate from '$components/login/ModalCreate.svelte';

	export let form;
</script>

<Toast {form} />

<main
	class="bg-mainBlue p-6 grid w-full min-h-screen
    bg-gradient-to-r
    from-azul-200
    via-azul-300
    to-azul-400
    background-animate
		font-inconsolata"
>
	<h1 class="text-4xl font-bold text-center h-4 text-white">Asistente Virtual</h1>
	<img alt="icono del asistente virtual" src="/assets/bot2.png" class="m-auto h-96 w-96" />

	<section class="grid">
		<h2 class="text-white text-3xl font-bold font-inconsolata">Iniciar sesión</h2>
		<form class="grid gap-2" method="post" action="?/login">
			<Input label={'Correo'} name={'email'} labelClass={'text-white text-xl'} />
			<Input
				label={'Contraseña'}
				name={'password'}
				type={'password'}
				labelClass={'text-white text-xl'}
			/>
			<button
				type="submit"
				class="btn bg-azul-300 hover:bg-azul-200 rounded-md p-2 text-white font-bold text-xl border-none"
			>
				Ingresar
			</button>
		</form>

		<button
			class="btn mt-8 text-xl text-azul-300 hover:opacity-80"
			onclick="creationModal.showModal()">Crear cuenta</button
		>
	</section>

	<ModalCreate />
</main>

<style>
	.background-animate {
		background-size: 400%;
		-webkit-animation: AnimationName 7s ease infinite;
		-moz-animation: AnimationName 7s ease infinite;
		animation: AnimationName 7s ease infinite;
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
