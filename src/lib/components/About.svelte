<script lang="ts">
	import { imgURL1, imgURL2 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';
	import PanAcross from '$lib/components/PanAcross.svelte';
	import Strategy from '$lib/components/Strategy.svelte';

	let quoteProps = {
		heading: 'Asset Management',
		subheading: 'BFJK',
		content: `At BFJK Corp, we are a distinguished private asset management company specializing in the acquisition, development, and management of a diverse portfolio of high-end residential properties, large hotels, and other strategic real estate assets on a global scale. With an unwavering commitment to excellence and a passion for delivering exceptional value.`,
		image: imgURL1
	};
</script>

<section id="about">
	<PanAcross />

	<HeroTemplate
		heading={quoteProps.heading}
		subheading={quoteProps.subheading}
		content={quoteProps.content}
		image={quoteProps.image}
		alignment="right"
		quote_string="Building value in every square foot, BFJK transforms spaces into assets that grow and inspire."
	/>
	<Strategy />
</section>
