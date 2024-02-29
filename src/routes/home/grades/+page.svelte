<script>
	export let data;
	const { academicInfo } = data;

	console.log(academicInfo);
</script>

<main class="p-6 grid gap-y-5 mb-16">
	<h1 class="font-bold text-3xl text-center">Notas</h1>
	<p>Semestre: {academicInfo.semester}</p>
	{#each Object.keys(academicInfo.courses) as course, i}
		<p>{academicInfo.courses[course].name}: {academicInfo.courses[course].grade}</p>
	{/each}
</main>
