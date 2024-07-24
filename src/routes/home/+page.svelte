<script>
	import ModalForm from '$components/ModalForm.svelte';
	import Input from '$components/Input.svelte';
	import Toast from '$components/Toast.svelte';
	import Pendientes from '$components/home/Pendientes.svelte';
	import Materias from '$components/home/Materias.svelte';

	export let data, form;
	let { session, tasks, academicInfo } = data;
</script>

<Toast {form} />

<main class="p-6 grid gap-y-5 mb-16">
	<h1 class="font-bold text-3xl text-center">Inicio</h1>

	<Pendientes {tasks} {session} />
	<Materias {academicInfo} />
</main>

<ModalForm id_modal={'addTaskModal'} action={'addTask'} boton={'Agregar'}>
	<h3 class="font-bold text-lg mb-2" slot="title">Nueva tarea</h3>
	<Input label={'Nombre de la tarea'} name={'title'} />
	<input type="hidden" name="user_id" value={session.id} />
</ModalForm>
