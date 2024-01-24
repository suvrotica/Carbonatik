<script lang="ts">
	import { imgURL11 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';
	import PanAcross from '$lib/components/PanAcross.svelte';
	import Vision from '$lib/components/Vision.svelte';

	let quoteProps = {
		heading: 'Expertise',
		subheading: 'PORTFOLIO',
		content: `Our portfolio comprises a carefully curated selection of high-end residential properties and large-scale hotels renowned for their architectural excellence, superior craftsmanship, and iconic value. As astute investment managers, we continually assess market conditions, identifying opportunities for value enhancement through strategic renovations, repositioning, and optimization of operational efficiencies. This proactive approach ensures that our assets yield sustainable returns and maintain their esteemed status in the marketplace.`,
		image: imgURL11
	};
</script>

<section id="portfolio">
	<HeroTemplate
		heading={quoteProps.heading}
		subheading={quoteProps.subheading}
		content={quoteProps.content}
		image={quoteProps.image}
		alignment="left"
	/>
</section>
