<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const position = tweened(0, {
		duration: 5000,
		easing: cubicOut
	});

	let currentStepIndex = 0;

	// Define the steps of the animation
	const steps = [
		{ scale: 1.2, x: 0, origin: 'center center' }, // Initial overview
		{ scale: 2, x: 20, origin: 'left bottom' }, // Zoom into a detail
		{ scale: 1.5, x: 80, origin: 'right top' }, // Shift focus to another area
		{ scale: 3, x: 50, origin: 'center center' }, // Deep zoom on a central feature
		{ scale: 2, x: 0, origin: 'left center' },
		{ scale: 1.5, x: 25, origin: 'center center' }, // Added step
		{ scale: 1, x: 100, origin: 'right center' },
		{ scale: 1.5, x: 75, origin: 'center center' }, // Added step
		{ scale: 5, x: 50, origin: 'center center' },
		{ scale: 1.5, x: 25, origin: 'center center' }, // Added step
		{ scale: 1.5, x: 10, origin: 'left top' }, // Another detail
		{ scale: 1.2, x: 90, origin: 'right bottom' }, // Pan to a different corner
		{ scale: 1.2, x: 0, origin: 'center center' },
		{ scale: 2, x: 0, origin: 'left center' } // Loop back to start
	];

	// Function to update the animation step
	function updateStep() {
		currentStepIndex = (currentStepIndex + 1) % steps.length;
		position.set(steps[currentStepIndex].x);
	}

	// Run the animation in a loop
	setInterval(updateStep, 5000);

	// Reactive declarations
	$: transform = `scale(${steps[currentStepIndex].scale})`;
	$: transformOrigin = steps[currentStepIndex].origin;
</script>

<section style="width: auto; height: 600px; overflow: hidden; position: relative;">
	<div
		class=" image-pan-container relative overflow-hidden bg-cover bg-no-repeat"
		style="background-image: url('https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/DALL%C2%B7E%202024-01-05%2001.10.36%20-%20A%20detailed%20architectural%20design%20presentation,%20showcasing%20an%20elegant%20and%20modern%20building.%20The%20image%20should%20feature%20a%20variety%20of%20perspectives%20and%20scales-yl3xyWb9PcLC2g5P2AfOQhvxdhOsoD.png');
         transform: {transform};
         transform-origin: {transformOrigin};
         
         width: 100%; height: 100%;
         "
	>
		Test Content
	</div>
</section>

<div
	class="image-pan-container h-128 relative overflow-hidden bg-cover bg-no-repeat"
	style="background-image: url('https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/house2-U3SUqdZM5MVrJsae9ihOk73WWSbMhx.png');
           transform: {transform};
           transform-origin: {transformOrigin};"
>
	<!-- Additional content can go here -->
</div>

<style>
	.image-pan-container {
		transition: transform 5s linear;
	}
</style>
