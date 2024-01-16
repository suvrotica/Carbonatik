<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import Quote from '$lib/components/Quote.svelte';
	import { imgURL1 } from '$lib/global';
</script>

<section id="hero" class="flex flex-col lg:flex-row">
	<div class="lg:hidden">
		<img src={imgURL1} alt="House" class="w-full" />
	</div>
	<div class="text-center lg:w-1/2 lg:text-left">
		<h2>
			Asset Management
			<span class="span_underlined">EXQUISITE</span>
		</h2>
		<Quote />
		<p>
			At BFJK, we redefine the essence of real estate asset management. With a keen eye for detail
			and a commitment to excellence, we transform every square foot into a valuable asset. Our
			approach combines innovative strategies with sustainable practices, ensuring that each project
			we undertake not only meets, but exceeds expectations. BFJK stands as a beacon of inspiration
			in the real estate industry, crafting spaces that grow, inspire, and endure.
		</p>
	</div>
	<div class="hidden lg:block lg:w-1/2">
		<img src={imgURL1} alt="House" class="w-full" />
	</div>
</section>
