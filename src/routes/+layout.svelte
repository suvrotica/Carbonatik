<script lang="ts">
	import '../app.pcss';
	import { onMount } from 'svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { title, description } from '$lib/global';

	onMount(() => {
		document.documentElement.classList.add('dark');
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<main>
	<Navigation />
	<slot />
	<Footer />
</main>
