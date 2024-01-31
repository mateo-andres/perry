<script>
	import Chat from '$components/Chat.svelte';
</script>

<main class="p-4 flex flex-col h-screen relative">
	<h1 class="font-bold text-3xl text-center">Asistente</h1>
	<div class="h-full overflow-auto mb-10 p-1" id="chat">
		<Chat role={'user'} message={'Hola'} />
		<Chat role={'user'} message={'Como estas?'} />
		<Chat role={'bot'} message={'Hola, no me quejo'} />
		<Chat role={'bot'} message={'Hola, no me quejo'} />
		<Chat role={'bot'} message={'Hola, no me quejo'} />
		<Chat role={'bot'} message={'Hola, no me quejo'} />
		<Chat role={'bot'} message={'Hola, no me quejo'} />
	</div>

	<form class="join relative bottom-10">
		<input
			type="text"
			placeholder="Type here"
			class=" rounded-l-full input input-bordered border-mainBlue w-full join-item focus:outline-none"
		/>
		<button
			class="btn rounded-r-full pl-2 w-16 bg-mainBlue border border-mainBlue hover:border-darkBlue hover:bg-darkBlue"
		>
			<i class="fa-solid fa-paper-plane fa-xl" />
		</button>
	</form>
</main>

<style>
	#chat::-webkit-scrollbar {
		width: 3px;
	}
	#chat::-webkit-scrollbar-thumb {
		background-color: gray;
	}
</style>
