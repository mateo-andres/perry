<script>
	import Card from '$components/Card.svelte';
	import ModalForm from '$components/ModalForm.svelte';
	import Input from '$components/Input.svelte';
	import Toast from '$components/Toast.svelte';
	import Pendientes from '$components/home/Pendientes.svelte';

	export let data, form;
	let { session, tasks } = data;
</script>

<Toast {form} />

<main class="p-6 grid gap-y-5 mb-16">
	<h1 class="font-bold text-3xl text-center">Inicio</h1>

	<Pendientes {tasks} {session} />

	<Card title={'Recomendaciones'} button={'Ir'} urlLink={'/assistant'}>
		<p>Descubir Recomendaciones y ver historico</p>
	</Card>

	<Card title={'Notas'} button={'Ver notas'} urlLink={'/home/grades'}>
		<i slot="icon" class="fa-solid fa-book" />

		<div class="flex flex-col items-center justify-center bg-navy text-white rounded-xl p-4">
			<h3 class="font-bold text-xl">Matemáticas</h3>
			<p class="text-gray-300">4.5</p>
		</div>
		<div class="flex flex-col items-center justify-center bg-navy text-white rounded-xl p-4">
			<h3 class="font-bold text-xl">Español</h3>
			<p class="text-gray-300">4.5</p>
		</div>
		<div class="flex flex-col items-center justify-center bg-navy text-white rounded-xl p-4">
			<h3 class="font-bold text-xl">Ciencias</h3>
			<p class="text-gray-300">4.5</p>
		</div>
		<div class="flex flex-col items-center justify-center bg-navy text-white rounded-xl p-4">
			<h3 class="font-bold text-xl">Sociales</h3>
			<p class="text-gray-300">4.5</p>
		</div>
		<div class="flex flex-col items-center justify-center bg-navy text-white rounded-xl p-4">
			<h3 class="font-bold text-xl">Inglés</h3>
			<p class="text-gray-300">4.5</p>
		</div>
	</Card>

	<Card title={'Calendario'} button={'Agregar'}>
		<i slot="icon" class="fa-solid fa-calendar-days" />
		<Card title={'Evento 1'} />
		<Card title={'Evento 1'} />
		<Card title={'Evento 1'} />
	</Card>
</main>

<ModalForm id_modal={'addTaskModal'} action={'addTask'} boton={'Agregar'}>
	<h3 class="font-bold text-lg mb-2" slot="title">Nueva tarea</h3>
	<Input label={'Nombre de la tarea'} name={'title'} />
	<input type="hidden" name="user_id" value={session.id} />
</ModalForm>
