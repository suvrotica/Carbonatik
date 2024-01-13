<script>
	import { fade } from 'svelte/transition';
</script>

<section
	class=" bg-neutral-300 bg-contain bg-repeat pt-16 bg-blend-soft-light light-bg sm:pt-24 md:pt-28 lg:pt-32 dark:bg-neutral-800 dark:bg-blend-overlay dark:dark-bg"
>
	<div class="mx-auto max-w-screen-xl px-4 py-8 text-center sm:mt-20 lg:px-12 lg:py-16">
		<h1
			class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
			transition:fade={{ delay: 5000 }}
		>
			Welcome to BFJK Corp.
		</h1>

		<p
			class="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48 dark:text-gray-400"
			transition:fade={{ delay: 2000 }}
		>
			Excellence in Luxury Real Estate Asset Management
		</p>
	</div>
</section>
