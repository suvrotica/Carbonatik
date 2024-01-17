<script lang="ts">
	import '../app.pcss';
	import { onMount } from 'svelte';

	onMount(() => {
		document.documentElement.classList.add('dark');
	});
</script>

<main>
	<slot />
</main>
