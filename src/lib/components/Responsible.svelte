<script lang="ts">
	const imgSide='/Images/mine.jpg';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';
	import PanAcross from '$lib/components/PanAcross.svelte';
	import Vision from '$lib/components/Vision.svelte';
	import Risk from '$lib/components/Risk.svelte';

	let quoteProps = {
		heading: 'Responsibility',
		subheading: 'SOCIAL',
		content: `As responsible miners, we recognize the profound impact our operations have on local communities and the environment. Our commitment to social responsibility is ingrained in every aspect of our mining activities. We prioritize sustainable mining practices that minimize environmental disruption and maximize resource efficiency. Our state-of-the-art water treatment facilities and dry-stack tailings management systems significantly reduce our environmental footprint.

We actively engage with local communities, providing employment opportunities, supporting education initiatives, and contributing to infrastructure development. Our community outreach programs include skills training for local residents, health clinics, and collaborative projects to preserve cultural heritage sites near our mining operations.

In our gemstone division, we ensure ethical sourcing and maintain full traceability of our products. Our cutting and polishing facility not only adds value to our gemstones but also provides skilled employment opportunities for local artisans.

By integrating these responsible practices into our operations, we strive to create lasting value for our stakeholders, employees, and the communities we serve. Our dedication to social responsibility, coupled with our commitment to excellence in mining, positions us as a leader in sustainable mineral and gemstone production.`,
		image: imgSide
	};
</script>

<HeroTemplate
	heading={quoteProps.heading}
	subheading={quoteProps.subheading}
	content={quoteProps.content}
	image={quoteProps.image}
	mediaColumns="md:col-span-6"
	contentColumns="md:col-span-6"
	alignment="left"
/>