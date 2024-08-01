<script>
	import ModalForm from '$components/ModalForm.svelte';
	import Input from '$components/Input.svelte';
	import Toast from '$components/Toast.svelte';

	export let data, form;
	const { session, academicInfo, careerInfo } = data;
	console.log('🚀 ~ careerInfo:', careerInfo);

	let feedbackRate = 4;
	let newObjective = '';

	const handleNewObjective = async () => {
		const pastObjectives = [...careerInfo.career_goals];
		// console.log('🚀 ~ newObjective:', newObjective);
		careerInfo.career_goals = [...careerInfo.career_goals, newObjective];

		await fetch(`/api/users/professional/goals`, {
			method: 'PUT',
			body: JSON.stringify({ id: careerInfo.id, newObjective: newObjective })
		});

		newObjective = '';
	};
</script>

<main class="p-4 font-inconsolata">
	<Toast {form} />
	<!-- <h1 class="font-bold text-3xl text-center">perfil</h1> -->

	<section
		class="flex flex-col items-center justify-center relative bg-azul-300 rounded-xl mt-20 pb-6 mb-6 text-sombra-100"
	>
		<img
			class="w-32 h-32 rounded-full absolute -top-14"
			src="https://picsum.photos/200"
			alt="profile "
		/>
		<div class="flex flex-col items-center justify-center mb-4 mt-[25%]">
			<h2 class="font-bold text-4xl">{session.name}</h2>
			<p class="">{session.email}</p>
		</div>
		<div class="flex flex-col items-center justify-center gap-3">
			<a href="/" class="btn btn-sm text-sombra-100 bg-azul-400 border-0 px-7 hover:bg-azul-200"
				>Cerrar sesión</a
			>
		</div>
	</section>

	<section class="grid gap-4">
		<button
			class="btn bg-azul-300 hover:bg-azul-200 text-sombra-100 w-full justify-center text-base"
			onclick="newMailModal.showModal()"
		>
			<i class="fa-solid fa-at" />Correo y contraseña
		</button>
		<button
			class="btn bg-azul-300 hover:bg-azul-200 text-sombra-100 w-full justify-center text-base"
		>
			<i class="fa-solid fa-user-pen" />Información de usuario
		</button>
		<button
			class="btn bg-azul-300 hover:bg-azul-200 text-sombra-100 w-full justify-center text-base"
			onclick="academicModal.showModal()"
		>
			<i class="fa-solid fa-book" />Información académica
		</button>
		<button
			class="btn bg-azul-300 hover:bg-azul-200 text-sombra-100 w-full justify-center text-base"
			onclick="professionalModal.showModal()"
		>
			<i class="fa-solid fa-bullseye" />Objetivos e intereses
		</button>
		<button
			class="btn bg-azul-300 hover:bg-azul-200 text-sombra-100 w-full justify-center text-base"
			onclick="feddbackModal.showModal()"
		>
			<i class="fa-regular fa-face-smile" />Feedback aplicativo
		</button>
	</section>
</main>

<ModalForm id_modal={'academicModal'} action={'sendAcademicInfo'} boton={'Guardar'}>
	<h3 class="font-bold text-lg mb-2" slot="title">Información académica</h3>
	<input type="hidden" name="user_id" value={session.id} />
	<Input name={'id'} type={'hidden'} value={academicInfo?.id} />
	<Input label={'Semestre actual'} name={'semester'} type={'number'} />
	<div class="divider" />
	<h4>Materias del semestre</h4>
	<Input label={'Materia 1'} name={'course1'} />
	<Input label={'Materia 2'} name={'course2'} />
	<Input label={'Materia 3'} name={'course3'} />
	<Input label={'Materia 4'} name={'course4'} />
	<Input label={'Materia 5'} name={'course5'} />
</ModalForm>

<ModalForm id_modal={'professionalModal'} action={'sendProfessionalInfo'} boton={'Guardar'}>
	<h3 class="font-bold text-lg mb-2" slot="title">Información profesional</h3>
	<section>
		<!-- <input type="hidden" name="user_id" value={session.id} />
		<Input name={'id'} type={'hidden'} value={careerInfo?.id} /> -->
		<h4>Objetivos profesionales</h4>
		<ul class="grid gap-1 my-2">
			{#each careerInfo.career_goals as goal}
				<li class="">
					<p class="text-sombra-300"><span class="text-sm">📌</span> {goal}</p>
				</li>
			{/each}
		</ul>

		<!-- <Input label={''} name={'objective1'} placeholder={'Nuevo objetivo'} /> -->
		<input
			class="input input-bordered input-sm focus:outline-azul-100"
			type="text"
			placeholder="Nuevo objetivo"
			bind:value={newObjective}
		/>
		<button class="btn btn-sm btn-primary w-fit px-2" type="button" on:click={handleNewObjective}
			>Agregar</button
		>
	</section>
	<!-- <Input label={''} name={'objective2'} placeholder={'Objetivo 2'} />
	<Input label={''} name={'objective3'} placeholder={'Objetivo 3'} /> -->
	<div class="divider" />
	<h4>Habilidades técnicas</h4>
	<Input label={''} name={'skill1'} placeholder={'Habilidad 1'} />
	<Input label={''} name={'skill2'} placeholder={'Habilidad 2'} />
	<Input label={''} name={'skill3'} placeholder={'Habilidad 3'} />
</ModalForm>

<ModalForm id_modal={'feddbackModal'} action={'sendFeecback'} boton={'Envíar'}>
	<h3 class="font-bold text-lg mb-2" slot="title">Feedback aplicación</h3>
	<input type="hidden" name="user_id" value={session.id} />
	<input type="hidden" name="rate" value={feedbackRate} />
	<h4>Comparte tu opinión acerca de esta aplicacion</h4>
	<Input label={''} name={'feedback'} placeholder={'Tu opinión...'} />
	<h4>Calificación:</h4>
	<div class="rating rating-md gap-2">
		<input
			type="radio"
			name="rating-7"
			class="mask mask-star-2 bg-orange-400"
			on:click={() => (feedbackRate = 1)}
		/>
		<input
			type="radio"
			name="rating-7"
			class="mask mask-star-2 bg-orange-400"
			on:click={() => (feedbackRate = 2)}
		/>
		<input
			type="radio"
			name="rating-7"
			class="mask mask-star-2 bg-orange-400"
			on:click={() => (feedbackRate = 3)}
		/>
		<input
			type="radio"
			name="rating-7"
			class="mask mask-star-2 bg-orange-400"
			on:click={() => (feedbackRate = 4)}
			checked
		/>
		<input
			type="radio"
			name="rating-7"
			class="mask mask-star-2 bg-orange-400"
			on:click={() => (feedbackRate = 5)}
		/>
	</div>
</ModalForm>

<ModalForm id_modal={'newMailModal'} action={'updateMail'} boton={'Actualizar'}>
	<h3 class="font-bold text-lg mb-2" slot="title">Actualización correo y contraseña</h3>
	<input type="hidden" name="user_id" value={session.id} />
	<input type="hidden" name="rate" value={feedbackRate} />
	<h4>Nuevo correo electronico</h4>
	<Input label={''} name={'email'} placeholder={'correo@nuevo.com'} />
	<h4>Contraseña actual</h4>
	<Input label={''} type={'password'} name={'currentPassword'} />
	<h4>Nueva contraseña</h4>
	<Input label={''} type={'password'} name={'newPassword'} />
</ModalForm>
