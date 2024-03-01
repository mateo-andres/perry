<script>
	import Chat from '$components/Chat.svelte';
	import { SSE } from 'sse.js';

	let query = '';
	let answer = '';
	let loading = false;
	let chatMessages = [];

	// const handleSubmit = () => {
	// 	loading = true;
	// 	chatMessages = [...chatMessages, { role: 'user', content: query }];

	// 	const eventSource = new SSE('/api/chat', {
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		payload: JSON.stringify({ messages: chatMessages })
	// 	});

	// 	query = '';
	// 	eventSource.addEventListener('error', handleError);

	// 	eventSource.addEventListener('message', (e) => {
	// 		try {
	// 			loading = false;
	// 			if (e.data === '[DONE]') {
	// 				chatMessages = [...chatMessages, { role: 'bot', content: answer }];
	// 				answer = '';
	// 				return;
	// 			}

	// 			const completionResponse = JSON.parse(e.data);
	// 			const [{ delta }] = completionResponse.choices;

	// 			if (delta.content) {
	// 				answer = (answer ?? '') + delta.content;
	// 			}
	// 		} catch (err) {
	// 			handleError(err);
	// 		}
	// 	});

	// 	eventSource.stream();
	// };

	// const handleError = (error) => {
	// 	loading = false;
	// 	query = '';
	// 	answer = 'Error';
	// 	console.error('Error00:', error);
	// };
</script>

<main class="p-4 flex flex-col h-screen relative">
	<h1 class="font-bold text-3xl text-center">Asistente</h1>
	<div class="h-full overflow-auto mb-10 p-1" id="chat">
		{#each chatMessages as message}
			<Chat role={message.role} message={message.content} />
		{/each}
		{#if answer}
			<Chat role={'bot'} message={answer} />
		{/if}
		{#if loading}
			<Chat role={'bot'} message={'Cargando...'} />
		{/if}
	</div>

	<!-- <form class="join relative bottom-10" on:submit|preventDefault={() => handleSubmit()}> -->
	<form class="join relative bottom-10">
		<input
			type="text"
			placeholder="Type here"
			name="message"
			class=" rounded-l-full input input-bordered border-mainBlue w-full join-item focus:outline-none"
			bind:value={query}
		/>
		<!-- <button
			type="submit"
			class="btn rounded-r-full pl-2 w-16 bg-mainBlue border border-mainBlue hover:border-darkBlue hover:bg-darkBlue"
		>
			<i class="fa-solid fa-paper-plane fa-xl" />
		</button> -->
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
