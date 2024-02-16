<script>
	import { invalidate, invalidateAll } from '$app/navigation';

	import Card from '$components/Card.svelte';
	import Modal from '$components/Modal.svelte';
	import Input from '$components/Input.svelte';

	export let data;
	const { session, tasks } = data;

	const handleTask = (e) => {
		console.log(e);
		e.target.submit();
	};

	function rerunLoadFunction() {
		// any of these will cause the `load` function to rerun
		invalidate('app:random');
		invalidate('https://api.example.com/random-number');
		invalidate((url) => url.href.includes('random-number'));
		invalidateAll();
	}
</script>

<button on:click={rerunLoadFunction}>Update random number</button>

<main class="p-6 grid gap-y-5 mb-16">
	<h1 class="font-bold text-3xl text-center">Inicio</h1>

	<Card title={'Pendientes'}>
		<i slot="icon" class="fa-solid fa-list-check" />

		{#each tasks as task}
			{#if task.status === 'pending'}
				<form method="post" action="?/completeTask" on:submit|preventDefault={handleTask}>
					<label class="cursor-pointer label justify-start gap-4">
						<button>
							<input type="checkbox" class="checkbox checkbox-accent" name={task.task_id} />
						</button>
						<span class="label-text">{task.title}</span>
					</label>
				</form>
			{:else}
				<label class="cursor-pointer label justify-start gap-4">
					<input type="checkbox" class="checkbox checkbox-accent" checked name={task.task_id} />
					<span class="label-text">{task.title}</span>
				</label>
			{/if}
		{:else}
			<p>¡No hay nada pendiente!</p>
		{/each}

		<button
			slot="button_modal"
			class="btn bg-mainBlue hover:bg-darkBlue text-darkNavy"
			onclick="addTaskModal.showModal()"
		>
			Agregar tarea
		</button>
	</Card>

	<Card title={'Recomendaciones'} button={'Ir'}>
		<p>Descubir Recomendaciones y ver historico</p>
	</Card>

	<Card title={'Notas'} button={'Ver notas'}>
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

<Modal id_modal={'addTaskModal'} action={'addTask'} boton={'Agregar'}>
	<h3 class="font-bold text-lg mb-2" slot="title">Nueva tarea</h3>
	<Input label={'Nombre de la tarea'} name={'title'} />
	<input type="hidden" name="user_id" value={session.id} />
</Modal>
