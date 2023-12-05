<script>
	import Card from '$components/Card.svelte';
</script>

<main class="p-6 grid gap-y-5 mb-16">
	<h1 class="font-bold text-3xl text-center">Inicio</h1>

	<Card title={'Pendientes'} button={'Agregar tarea'}>
		<i slot="icon" class="fa-solid fa-list-check" />
		<label class="cursor-pointer label justify-start gap-4">
			<input type="checkbox" checked="checked" class="checkbox checkbox-accent" />
			<span class="label-text">Tarea 1</span>
		</label>

		<label class="cursor-pointer label justify-start gap-4">
			<input type="checkbox" checked="checked" class="checkbox checkbox-accent" />
			<span class="label-text">Tarea 2</span>
		</label>

		<label class="cursor-pointer label justify-start gap-4">
			<input type="checkbox" checked="checked" class="checkbox checkbox-accent" />
			<span class="label-text">Tarea 3</span>
		</label>
	</Card>

	<Card title={'Recomendaciones'} button={'Ir'}>
		<p>Descubir Recomendaciones y ver historico</p>
	</Card>

	<Card title={'Notas'} button={'Ver notas'}>
		<i slot="icon" class="fa-solid fa-book" />

		<div class="flex flex-col items-center justify-center bg-orange-100 rounded-xl p-4">
			<h3 class="font-bold text-xl">Matemáticas</h3>
			<p class="text-gray-500">4.5</p>
		</div>
		<div class="flex flex-col items-center justify-center bg-orange-100 rounded-xl p-4">
			<h3 class="font-bold text-xl">Español</h3>
			<p class="text-gray-500">4.5</p>
		</div>
		<div class="flex flex-col items-center justify-center bg-orange-100 rounded-xl p-4">
			<h3 class="font-bold text-xl">Ciencias</h3>
			<p class="text-gray-500">4.5</p>
		</div>
		<div class="flex flex-col items-center justify-center bg-orange-100 rounded-xl p-4">
			<h3 class="font-bold text-xl">Sociales</h3>
			<p class="text-gray-500">4.5</p>
		</div>
		<div class="flex flex-col items-center justify-center bg-orange-100 rounded-xl p-4">
			<h3 class="font-bold text-xl">Inglés</h3>
			<p class="text-gray-500">4.5</p>
		</div>
	</Card>

	<Card title={'Calendario'} button={'Agregar'}>
		<i slot="icon" class="fa-solid fa-calendar-days" />
		<Card title={'Evento 1'} />
		<Card title={'Evento 1'} />
		<Card title={'Evento 1'} />
	</Card>
</main>
