<script>
	export let message = 'Hola';
	export let role;
</script>

{#if role === 'user'}
	<div class="chat chat-end">
		<div class="chat-image avatar">
			<div class="w-10 rounded-full">
				<img alt="Tailwind CSS chat bubble component" src="https://picsum.photos/200" />
			</div>
		</div>
		<div class="chat-bubble">{message}</div>
	</div>
{:else if role === 'bot'}
	<div class="chat chat-start">
		<div class="chat-image avatar">
			<div class="w-10 rounded-full">
				<img alt="Tailwind CSS chat bubble component" src="/assets/bot.png" />
			</div>
		</div>
		<div class="chat-bubble bg-navy">{message}</div>
		<div class="chat-footer opacity-50 mt-1">
			<button title="Comentar resultado"><i class="fa-solid fa-message" /></button>
		</div>
	</div>
{/if}
