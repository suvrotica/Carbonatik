<script lang="ts">
	import Quote from '$lib/components/Quote.svelte';
	import { imgURL1 } from '$lib/global';
	import GoldLine from '$lib/components/GoldLine.svelte';
</script>

<section id="hero" class="hero_container">
	<div class="hero_container_content">
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
	<div class="hero_container_media">
		<img src={imgURL1} alt="House" class="zoom-image h-full object-cover" />
	</div>
</section>
<GoldLine />

<style>
	.zoom-image {
		transform: scale(1.1);
	}
</style>
