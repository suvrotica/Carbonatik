<script lang="ts">
	const imgSide= '/Images/mine.jpg';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';
	import PanAcross from '$lib/components/PanAcross.svelte';
	import Vision from '$lib/components/Vision.svelte';
	import Risk from '$lib/components/Risk.svelte';

	let quoteProps = {
		heading: 'Mining Operations',
		subheading: 'DIVERSE PORTFOLIO',
		content: `Our company leads the mining industry with a diverse portfolio of high-quality mineral and gemstone operations. Our graphite sector currently produces 3,000 metric tons monthly, with expansion plans targeting 10,000 tons per month by December 2025. Our five mines hold estimated reserves of 6 million tons of premium graphite, backed by comprehensive lab reports.

We're developing a gold mica site, set to commence operations in October 2024, with estimated reserves of 10 million tons. Our unique Ruby Granite operation, launching December 2024, will supply a rare red granite with gold sparkles, from reserves exceeding 10 million tons.

Our operational quartz mine produces 1,000 tons of high-grade quartz monthly, with quality validation pending from NSL laboratories. Our gemstone division, the crown jewel of our operations, yields sapphires and various semi-precious stones, processed in our cutting and polishing facility staffed by 25 expert gem cutters.

We maintain an unwavering commitment to sustainable practices and rigorous quality control across all operations, delivering premium products while responsibly managing natural resources. This diverse portfolio and focus on quality position us as a leader in the global mining sector.`,
		image: imgSide
	};
</script>

<HeroTemplate
	heading={quoteProps.heading}
	subheading={quoteProps.subheading}
	content={quoteProps.content}
	video="Videos/graphite.mp4"
	mediaColumns="md:col-span-5"
	contentColumns="md:col-span-7"
	alignment="right"
/>