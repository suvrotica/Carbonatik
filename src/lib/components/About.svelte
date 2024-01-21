<script lang="ts">
	import { imgURL1, imgURL2 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';
	import PanAcross from '$lib/components/PanAcross.svelte';
	import Vision from '$lib/components/Vision.svelte';

	let quoteProps = {
		id: 'about',
		heading: 'Asset Management',
		subheading: 'EXQUISITE',
		content: `At BFJK, we redefine the essence of real estate asset management. With a keen eye for detail
			and a commitment to excellence, we transform every square foot into a valuable asset. Our
			approach combines innovative strategies with sustainable practices, ensuring that each project
			we undertake not only meets, but exceeds expectations. BFJK stands as a beacon of inspiration
			in the real estate industry, crafting spaces that grow, inspire, and endure.`,
		image: imgURL1
	};
	console.log(quoteProps.id);
</script>

<PanAcross />

<HeroTemplate
	id={quoteProps.id}
	heading={quoteProps.heading}
	subheading={quoteProps.subheading}
	content={quoteProps.content}
	image={quoteProps.image}
	alignment="right"
	quote_string="Building value in every square foot, BFJK transforms spaces into assets that grow and inspire."
/>
<Vision />
