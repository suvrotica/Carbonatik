<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import Quote from '$lib/components/Quote.svelte';
	import GoldLine from '$lib/components/GoldLine.svelte';
	export let heading = 'Not Provided';
	export let subheading = 'Not Provided';
	export let content = 'Not Provided';
	export let mediaColumns = 'md:col-span-5';
	export let contentColumns = 'md:col-span-7';
	export let image = 'Not Provided';
	export let imageClass = 'Not Provided';
	export let alignment = 'right';
	export let quote_string = 'Not Provided';
	let visible = false;
	onMount(() => {
		visible = true;
	});
	let fadeInOptions = {
		delay: 1000,
		duration: 500
	};
	let inViewOptions = {
		threshold: 0.5
	};
</script>

<a href="/#about" class="clickable-section">
	{#if visible}
		<article
			class="hero_container"
			use:inview={inViewOptions}
			on:inview_change={() => (fadeInOptions = { ...fadeInOptions, delay: 0 })}
		>
			{#if alignment === 'left'}
				<div class={`${mediaColumns} hero_container_media`}>
					<img
						src={image}
						alt="provided background"
						class={`${imageClass} zoom-image  h-full object-cover`}
					/>
				</div>
			{/if}

			<div class={`${contentColumns} hero_container_content`} transition:fade={{ delay: 2000 }}>
				<h3 transition:fade={{ delay: 3000 }}>
					{heading}
					<span class="span_underlined">{subheading}</span>
					<span class=" dot-pulse"></span>
				</h3>
				{#if quote_string !== 'Not Provided'}
					<Quote {quote_string} />
				{/if}

				<p transition:fade={{ delay: 4000 }}>
					{content}
				</p>
			</div>

			{#if alignment === 'right'}
				<div class={`${mediaColumns} hero_container_media`}>
					<img
						src={image}
						alt="provided background"
						class={`${imageClass} zoom-image  h-full object-cover`}
					/>
				</div>
			{/if}
		</article>
		<GoldLine />
	{/if}
</a>

<style>
	.zoom-image {
		transform: scale(1.1);
	}
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
	.clickable-section {
		text-decoration: none; /* Removes underline from links */
		color: inherit; /* Keeps text color consistent */
		display: block; /* Makes the anchor behave like a block, covering the entire section */
	}
</style>
