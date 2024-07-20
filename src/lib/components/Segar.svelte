<script lang="ts">
	import { imgURL18 } from '$lib/global'; 
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';

	let quoteProps = {
		heading: 'Segar Muthumurugesu',
		subheading: 'VICE PRESIDENT - OPERATIONS - SRI LANKA',
		content: `Segar Muthumurugesu, serving as the Vice President of Operations for Sri Lanka at Carbonatik, brings a wealth of local expertise and operational acumen to our team. His deep understanding of Sri Lanka's environmental landscape and business ecosystem has been invaluable in establishing and expanding Carbonatik's presence in the region.

Segar's role is crucial in implementing Carbonatik's carbon offset strategies in Sri Lanka, ensuring that our solutions are tailored to meet the unique needs of the local market while adhering to global standards. His leadership has been instrumental in developing partnerships with local industries, government bodies, and environmental organizations, creating a strong network for impactful carbon reduction initiatives.

With a keen focus on operational efficiency and sustainability, Segar has been at the forefront of introducing innovative carbon offset projects in Sri Lanka. His efforts have significantly contributed to raising awareness about climate change mitigation in the country and positioning Carbonatik as a leader in sustainable practices in the region.

Segar's commitment to fostering a culture of environmental responsibility within Sri Lankan businesses has not only driven Carbonatik's growth but also contributed to the overall sustainability goals of the nation.`,
		image: imgURL18
	};
</script>

<HeroTemplate
	heading={quoteProps.heading}
	subheading={quoteProps.subheading}
	content={quoteProps.content}
	imageClass="imgPhoto"
	mediaColumns="md:col-span-0"
	contentColumns="md:col-span-12"
	alignment="right"
/>