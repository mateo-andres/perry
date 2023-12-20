<script>
	import '../app.css';
	import '@fortawesome/fontawesome-free/js/all.js';
	import Footer from '$components/Footer.svelte';
	import { page } from '$app/stores';
</script>

{#if $page.url.pathname === '/'}
	<slot />
{:else}
	<slot />
	<Footer />
{/if}
