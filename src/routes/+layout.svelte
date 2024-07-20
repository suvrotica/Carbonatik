<script lang="ts">
	import '../app.pcss';
	import { onMount } from 'svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	

	onMount(() => {
		document.documentElement.classList.add('dark');
	});
</script>

<main>
	<Navigation />
	<slot />
	<Footer />
</main>
