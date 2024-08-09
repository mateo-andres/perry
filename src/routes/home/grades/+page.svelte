<script>
	import ModalForm from '$components/ModalForm.svelte';

	export let data;
	const { academicInfo } = data;

	let newSubjects = [];
	let subjectInput = '';
	let newSemester;

	const handleAddNewSubject = () => {
		if (!subjectInput || subjectInput == '') return;
		newSubjects = [...newSubjects, subjectInput];
		subjectInput = '';
	};
</script>

<main class="p-6 grid gap-y-5 mb-16">
	<h1 class="font-bold text-3xl text-center">Notas</h1>
	<section class="grid gap-y-3">
		{#each academicInfo as semester}
			<div class="collapse collapse-arrow bg-base-200">
				<input type="radio" name="my-accordion-2" />
				<div class="collapse-title text-xl font-medium">
					Semestre: {semester.semester}
				</div>
				<div class="collapse-content">
					{#each Object.keys(semester.courses) as course, i}
						<p>{semester.courses[course].name}: {semester.courses[course].grade}</p>
					{/each}
				</div>
			</div>
		{/each}
	</section>
	<section>
		<button class="btn btn-primary rounded-xl" onclick="professionalModal.showModal()"
			>Empezar nuevo semestre</button
		>
	</section>
</main>

<ModalForm id_modal={'professionalModal'} action={'sendProfessionalInfo'}>
	<h3 class="font-bold text-lg mb-2" slot="title">Nuevo semestre</h3>
	<section>
		<ul class="grid gap-1 my-2">
			{#each newSubjects as subject}
				<li class="">
					<p class="text-sombra-300"><span class="text-sm">📘</span> {subject}</p>
				</li>
			{/each}
		</ul>

		<input
			class="input input-bordered input-sm focus:outline-azul-100"
			type="text"
			placeholder="Nueva materia"
			bind:value={subjectInput}
		/>
		<button class="btn btn-sm btn-primary w-fit px-2" type="button" on:click={handleAddNewSubject}
			>Agregar</button
		>
	</section>
	<div class="divider" />
</ModalForm>
