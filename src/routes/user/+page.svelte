<script>
	export let data;
	const { session } = data;

	console.log(data);
</script>

<main class="p-4">
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
		<button class="btn border border-darkBlue bg-mainBlue w-full justify-start">
			<i class="fa-solid fa-at" />Correo y contraseña
		</button>
		<button class="btn border border-darkBlue bg-mainBlue w-full justify-start">
			<i class="fa-solid fa-user-pen" />Información de usuario
		</button>
		<button class="btn border border-darkBlue bg-mainBlue w-full justify-start">
			<i class="fa-solid fa-book" />Información académica
		</button>
		<button class="btn border border-darkBlue bg-mainBlue w-full justify-start">
			<i class="fa-solid fa-bullseye" />Objetivos e intereses
		</button>
		<button class="btn border border-darkBlue bg-mainBlue w-full justify-start">
			<i class="fa-regular fa-face-smile" />Feedback aplicativo
		</button>
	</section>
</main>
