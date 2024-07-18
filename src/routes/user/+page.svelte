<script>
	import ModalForm from '$components/ModalForm.svelte';
	import Input from '$components/Input.svelte';
	import Toast from '$components/Toast.svelte';

	export let data, form;
	const { session, academicInfo, careerInfo } = data;

	let feedbackRate = 4;
</script>

<main class="p-4">
	<Toast {form} />
	<h1 class="font-bold text-3xl text-center">perfil</h1>
	<section
		class="flex flex-col items-center justify-center relative border border-darkBlue bg-mainBlue rounded-xl mt-20 pb-6 mb-6"
	>
		<img
			class="w-32 h-32 rounded-full relative bottom-14"
			src="https://picsum.photos/200"
			alt="profile "
		/>
		<div class="flex flex-col items-center justify-center mb-4">
			<h2 class="font-bold text-xl">{session.name}</h2>
			<p class="text-gray-500">{session.email}</p>
		</div>
		<div class="flex flex-col items-center justify-center gap-3">
			<a href="/" class="btn text-white btn-sm bg-darkNavy">Cerrar sesión</a>
		</div>
	</section>
	<section class="grid gap-4">
		<button
			class="btn border border-darkBlue bg-mainBlue w-full justify-start"
			onclick="newMailModal.showModal()"
		>
			<i class="fa-solid fa-at" />Correo y contraseña
		</button>
		<button class="btn border border-darkBlue bg-mainBlue w-full justify-start">
			<i class="fa-solid fa-user-pen" />Información de usuario
		</button>
		<button
			class="btn border border-darkBlue bg-mainBlue w-full justify-start"
			onclick="academicModal.showModal()"
		>
			<i class="fa-solid fa-book" />Información académica
		</button>
		<button
			class="btn border border-darkBlue bg-mainBlue w-full justify-start"
			onclick="professionalModal.showModal()"
		>
			<i class="fa-solid fa-bullseye" />Objetivos e intereses
		</button>
		<button
			class="btn border border-darkBlue bg-mainBlue w-full justify-start"
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
	<input type="hidden" name="user_id" value={session.id} />
	<Input name={'id'} type={'hidden'} value={careerInfo?.id} />
	<h4>Objetivos profesionales</h4>
	<Input label={''} name={'objective1'} placeholder={'Objetivo 1'} />
	<Input label={''} name={'objective2'} placeholder={'Objetivo 2'} />
	<Input label={''} name={'objective3'} placeholder={'Objetivo 3'} />
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
