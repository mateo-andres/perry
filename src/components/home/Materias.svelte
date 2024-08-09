<script>
	import Card from '$components/Card.svelte';

	export let academicInfo;
</script>

<Card title={'Materias'}>
	<i slot="icon" class="fa-solid fa-book" />

	{#each Object.keys(academicInfo[0].courses) as course, i}
		<div class="flex flex-col items-center justify-center bg-azul-300 text-white rounded-xl p-4">
			<h3 class="font-bold text-lg">{academicInfo[0].courses[course].name}</h3>
			<p>{academicInfo[0].courses[course].grade}</p>
		</div>
	{/each}

	<div class="card-actions justify-center">
		<a
			class="btn btn-sm w-fit px-6 mx-auto bg-azul-100 hover:bg-azul-200 text-azul-400 font-inconsolata text-lg"
			href="/home/grades">Ver detalle</a
		>
	</div>
</Card>
