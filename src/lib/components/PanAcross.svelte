<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	// export let images = [
	// 	'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/ShqZ-4JDTHqxOyIbz2VeYQ-axWDLxIGAp8RDP26u85DoEwO9NSNxL.webp',
	// 	'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/LpOzWj8uQASBVfErdisKyQ-JA5nM4C7QCCpb5dEUSMV61vnxuUi3S.webp',
	// 	'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/_KsCBIzRTi-9wdcCgYxDxQ-jjxGpXmKekBTxt9ejeILsr1qQlgiam.webp',
	// 	'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/ta4MQxFdSgaTQ1peILdcRQ-wxJIp7rA6QkAotgMDFubVEqanQSC78.webp',
	// 	'https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/wScuRI74QmWCgXTWl1wZVw-iAOqCKpByuGVJkAkO86JulPGyoqdAo.webp'
	// ]; // Array of image URLs passed as a prop
	export let images = [
  '/Images/Quartz/quartz(1).jpeg',
  '/Images/Quartz/quartz(2).jpeg',
  '/Images/Quartz/quartz(3).jpeg',
  '/Images/Quartz/quartz(4).jpeg',
  '/Images/Quartz/quartz(5).jpeg',
  '/Images/Quartz/quartz(6).jpeg',
  '/Images/Quartz/quartz(7).jpeg',
  '/Images/Quartz/quartz(8).jpeg',
  '/Images/Quartz/quartz(9).jpeg',
  '/Images/Quartz/quartz(10).jpeg',
  '/Images/Quartz/quartz(11).jpeg',
  '/Images/Quartz/quartz(12).jpeg'
];
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
