<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let images = [
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/d1-yDrCBNWGnz2pLH2qqrJDv55XqyAO6f.png',
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/DALL%C2%B7E%202024-01-05%2001.10.36%20-%20A%20detailed%20architectural%20design%20presentation,%20showcasing%20an%20elegant%20and%20modern%20building.%20The%20image%20should%20feature%20a%20variety%20of%20perspectives%20and%20scales-yl3xyWb9PcLC2g5P2AfOQhvxdhOsoD.png',
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/f2-kxvzGHvUCZX4vPz3yrpSFda8Us1e2s.png',
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/v1-CQeSfNVJA2sUU6Y79IbHYy7x6YZCpv.png',
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/v3-oehH9yBmKV738HINfLg8VBuaDg9AWa.png',
		'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/p6-1mJaqQBGOKY0OR8jvaOA9UlNDPbM0Y.png'
	]; // Array of image URLs passed as a prop
	const position = tweened(0, {
		duration: 5000,
		easing: cubicOut
	});

	let currentStepIndex = 0;
	let currentImageIndex = 0; // Index to track the current image

	// Your existing steps array
	const steps = [
		{ scale: 1.2, x: 0, origin: 'center center' }, // Initial overview
		{ scale: 2, x: 20, origin: 'left bottom' }, // Zoom into a detail
		{ scale: 1.5, x: 80, origin: 'right top' }, // Shift focus to another area
		{ scale: 3, x: 50, origin: 'center center' }, // Deep zoom on a central feature
		{ scale: 1.5, x: 10, origin: 'left top' }, // Another detail
		{ scale: 1.2, x: 90, origin: 'right bottom' }, // Pan to a different corner
		{ scale: 1.2, x: 0, origin: 'center center' } // Back to overview
	];

	function updateStep() {
		currentStepIndex = (currentStepIndex + 1) % steps.length;
		position.set(steps[currentStepIndex].x);
		// Update image along with the step
		if (currentStepIndex === 0) {
			currentImageIndex = (currentImageIndex + 1) % images.length;
		}
	}

	setInterval(updateStep, 5000);

	$: transform = `scale(${steps[currentStepIndex].scale})`;
	$: transformOrigin = steps[currentStepIndex].origin;
	$: backgroundImage = `url('${images[currentImageIndex]}')`; // Reactive statement for background image
</script>

<section style="width: auto; height: 600px; overflow: hidden; position: relative;">
	<div
		class="image-pan-container"
		style="background-image: {backgroundImage}; transform: {transform}; transform-origin: {transformOrigin}; width: 100%; height: 100%;"
	></div>
</section>

<style>
	.image-pan-container {
		transition: transform 5s linear;
		background-size: cover;
		background-position: center;
	}
</style>
