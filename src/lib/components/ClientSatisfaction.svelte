<script lang="ts">
	import { imgURL16 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';
	import PanAcross from '$lib/components/PanAcross.svelte';
	import Vision from '$lib/components/Vision.svelte';
	import Risk from '$lib/components/Risk.svelte';

	let quoteProps = {
		heading: 'Client',
		subheading: 'SATISFIED',
		content: `At BFJK, client satisfaction is paramount to our success. We take great pride in building long-term partnerships with our esteemed clients, understanding their unique aspirations and financial goals. By harmonizing our deep industry expertise and a personalized approach, we provide tailored investment solutions that align with our clients' objectives, risk tolerance, and time horizons. We prioritize transparent communication, operating with the utmost integrity and professionalism to create an environment of trust and confidence.`,
		image: imgURL16
	};
</script>

<HeroTemplate
	heading={quoteProps.heading}
	subheading={quoteProps.subheading}
	content={quoteProps.content}
	image={quoteProps.image}
	mediaColumns="md:col-span-9"
	contentColumns="md:col-span-3"
	alignment="right"
/>
