<script>
	import Card from '$components/Card.svelte';

	export let tasks, session;

	const handleTask = async (task) => {
		const pastTask = { ...task };
		const taskIndex = tasks.findIndex((t) => t.task_id === task.task_id);
		tasks[taskIndex].status = task.status === 'pending' ? 'done' : 'pending';

		await fetch(`/api/todos/${session.id}`, {
			method: 'PUT',
			body: JSON.stringify(pastTask)
		});
	};

	const handleDeleteTask = async (task) => {
		const oldTasks = [...tasks];
		tasks = tasks.filter((t) => t.task_id !== task.task_id);

		const fetchData = await fetch(`/api/todos/${session.id}`, {
			method: 'DELETE',
			body: JSON.stringify(task)
		});
		const response = await fetchData.json();

		if (!response.success) {
			tasks = oldTasks;
		}
	};
</script>

<Card title={'Pendientes'}>
	<i slot="icon" class="fa-solid fa-list-check" />
	{#each tasks as task}
		<div class="flex items-center justify-between">
			{#if task.status === 'pending'}
				<label class="cursor-pointer label justify-start gap-4">
					<input
						type="checkbox"
						class="checkbox"
						name={task.task_id}
						on:change={() => handleTask(task)}
					/>
					<span class="label-text">{task.title}</span>
				</label>
			{:else}
				<label class="cursor-pointer label justify-start gap-4">
					<input
						type="checkbox"
						class="checkbox"
						checked
						name={task.task_id}
						on:change={() => handleTask(task)}
					/>
					<span class="label-text line-through">{task.title}</span>
				</label>
			{/if}
			<button class="btn btn-xs text-red-600" on:click={() => handleDeleteTask(task)}>
				<i class="fa-solid fa-trash" />
			</button>
		</div>
	{:else}
		<p>¡No hay nada pendiente! 🤓</p>
	{/each}

	<button
		slot="button_modal"
		class="btn btn-sm w-fit px-6 mx-auto bg-azul-100 hover:bg-azul-200 text-azul-400 font-inconsolata text-lg"
		onclick="addTaskModal.showModal()"
	>
		Agregar tarea
	</button>
</Card>
