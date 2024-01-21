<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<section>
		<h1 transition:fade={{ delay: 2000 }}>
			Welcome to BFJK Corp<span class="dot-pulse"></span>
		</h1>

		<p transition:fade={{ delay: 1000 }}>Excellence in Luxury Real Estate Asset Management</p>
	</section>
{/if}

<style>
	.dot-pulse {
		display: inline-block;
		width: 6px;
		height: 6px;
		background-color: currentColor;
		border-radius: 50%;
		margin-left: 4px;
		animation: pulse 1s infinite ease-in-out;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
			transform: scale(1);
		}
		50% {
			opacity: 0.5;
			transform: scale(1.5);
		}
	}
</style>
