<script lang="ts">
	import { imgURL17 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';
	import PanAcross from '$lib/components/PanAcross.svelte';
	import Vision from '$lib/components/Vision.svelte';
	import Risk from '$lib/components/Risk.svelte';

	let quoteProps = {
		heading: 'Responsibility',
		subheading: 'SOCIAL',
		content: `As responsible global citizens, we acknowledge the importance of integrating sustainability practices and social responsibility into our investment strategies. We are committed to identifying and implementing environmentally conscious initiatives that promote energy efficiency, sustainable design, and community engagement. By doing so, we strive to create lasting value for both our clients and the communities in which we operate. Together with our dedicated team of professionals, renowned partners, and esteemed investors, we are poised to continue our legacy of excellence in private asset management. At BFJK, we are driven by a shared vision of delivering exceptional returns and creating enduring value from our global real estate investments.`,
		image: imgURL17
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
