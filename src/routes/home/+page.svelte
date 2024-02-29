<script>
	import { fade } from 'svelte/transition';

	import Card from '$components/Card.svelte';
	import Modal from '$components/Modal.svelte';
	import Input from '$components/Input.svelte';
	import Toast from '$components/Toast.svelte';

	export let data, form;
	let { session, tasks } = data;

	const handleTask = async (task) => {
		await fetch(`/api/todos/${session.id}`, {
			method: 'PUT',
			body: JSON.stringify(task)
		});

		const taskIndex = tasks.findIndex((t) => t.task_id === task.task_id);
		tasks[taskIndex].status = task.status === 'pending' ? 'done' : 'pending';
	};

	const handleDeleteTask = async (task) => {
		const fetchData = await fetch(`/api/todos/${session.id}`, {
			method: 'DELETE',
			body: JSON.stringify(task)
		});

		const response = await fetchData.json();

		if (response.success) {
			tasks = tasks.filter((t) => t.task_id !== task.task_id);
		}
	};
</script>

<Toast {form} />

<main class="p-6 grid gap-y-5 mb-16">
	<h1 class="font-bold text-3xl text-center">Inicio</h1>

	<Card title={'Pendientes'}>
		<i slot="icon" class="fa-solid fa-list-check" />
		{#each tasks as task}
			<div class="flex items-center justify-between">
				{#if task.status === 'pending'}
					<label
						class="cursor-pointer label justify-start gap-4"
						transition:fade={{ y: 200, duration: 100 }}
					>
						<input
							type="checkbox"
							class="checkbox checkbox-accent"
							name={task.task_id}
							on:change={() => handleTask(task)}
						/>
						<span class="label-text">{task.title}</span>
					</label>
				{:else}
					<label class="cursor-pointer label justify-start gap-4">
						<input
							type="checkbox"
							class="checkbox checkbox-accent"
							checked
							name={task.task_id}
							on:change={() => handleTask(task)}
						/>
						<span class="label-text line-through">{task.title}</span>
					</label>
				{/if}
				<button class="btn btn-xs bg-red-300" on:click={() => handleDeleteTask(task)}
					><i class="fa-solid fa-trash" />
				</button>
			</div>
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

<Modal id_modal={'addTaskModal'} action={'addTask'} boton={'Agregar'}>
	<h3 class="font-bold text-lg mb-2" slot="title">Nueva tarea</h3>
	<Input label={'Nombre de la tarea'} name={'title'} />
	<input type="hidden" name="user_id" value={session.id} />
</Modal>
