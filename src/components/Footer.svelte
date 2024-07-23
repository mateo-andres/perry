<script>
	import { page } from '$app/stores';
</script>

<div class="btm-nav btm-nav-xs p-1">
	<a class="text-darkNavy {$page.url.pathname === '/home' ? 'active' : ''}" href="/home">
		<i class="fa-solid fa-house" />
	</a>
	<a class="text-darkNavy {$page.url.pathname === '/assistant' ? 'active' : ''}" href="/assistant">
		<i class="fa-solid fa-robot" />
	</a>
	<a class="text-darkNavy {$page.url.pathname === '/user' ? 'active' : ''}" href="/user">
		<i class="fa-solid fa-user-astronaut" />
	</a>
</div>

<style>
	.active {
		border-top: 5px solid #38419d;
		color: #38419d;
	}
</style>
